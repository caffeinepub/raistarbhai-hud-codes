import { Button } from "@/components/ui/button";
import { Check, Copy, IndianRupee, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const UPI_ID = "7493951706@ybl";

const INCLUDES = [
  "Sabhi 6 subjects ke complete PDF notes",
  "Chapter-wise study material",
  "Practice questions & solutions",
  "Revision notes & important topics",
  "New chapters regularly updated",
];

export default function CoursePaymentSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(UPI_ID).then(() => {
      setCopied(true);
      toast.success("UPI ID copy ho gaya!");
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="payment" className="bg-white py-16 md:py-20">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Affordable Pricing
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Course Fee — Sirf ₹25!
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Sabhi subjects ke PDF notes, chapter-wise material, aur study
            resources sirf ₹25 mein
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="form-card overflow-hidden"
            data-ocid="payment.card"
          >
            <div className="form-header-stripe" />
            <div className="p-8">
              {/* Price display */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-1">
                  <IndianRupee className="w-10 h-10 text-primary" />
                  <span className="font-display text-7xl font-bold text-primary leading-none">
                    25
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  One-time payment • Lifetime access
                </p>
              </div>

              {/* Includes */}
              <div className="space-y-3 mb-8">
                <p className="font-semibold text-foreground text-sm uppercase tracking-wide mb-4">
                  Isme Kya Milega:
                </p>
                {INCLUDES.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <a href="#register">
                <Button
                  className="w-full bg-primary text-primary-foreground hover:opacity-90 font-semibold text-base py-3 shadow-blue-medium"
                  data-ocid="payment.primary_button"
                >
                  Abhi Register Karein →
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Payment Instructions */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="form-card p-6 border-blue-100">
              <h3 className="font-display font-bold text-lg text-foreground mb-4">
                UPI se Pay Karein
              </h3>

              <p className="text-sm text-muted-foreground mb-3">
                Neeche diye gaye UPI ID par ₹25 transfer karein:
              </p>

              {/* UPI ID copyable box */}
              <div className="flex items-center gap-2 bg-secondary rounded-xl px-4 py-3 border border-border">
                <span className="font-mono font-bold text-primary text-base flex-1">
                  {UPI_ID}
                </span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCopyUPI}
                  className="h-8 px-3 text-muted-foreground hover:text-primary hover:bg-primary/10 shrink-0"
                  data-ocid="payment.toggle"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-success" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  <span className="ml-1.5 text-xs">
                    {copied ? "Copied!" : "Copy"}
                  </span>
                </Button>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-100">
                <p className="text-sm text-amber-800 font-medium">
                  📸 Payment ke baad WhatsApp par screenshot bhejein
                </p>
                <p className="text-xs text-amber-700 mt-1">
                  Screenshot bhejne ke baad 24 ghante mein PDF access mil
                  jaayega.
                </p>
              </div>
            </div>

            <div className="form-card p-6 border-green-100 bg-gradient-to-br from-green-50/40 to-white">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-green-600" />
                WhatsApp Screenshot Bhejein
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Payment ka screenshot WhatsApp par bhejein. Aapko jald PDF
                access milega.
              </p>
              <a
                href="https://wa.me/919876543210?text=Hello%20Sonu%20Sir%2C%20maine%20%E2%82%B925%20pay%20kar%20diya%20hai.%20Screenshot%20bhej%20raha%20hoon."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-green-500 text-green-700 hover:bg-green-50 font-semibold w-full"
                  data-ocid="payment.secondary_button"
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  WhatsApp par Screenshot Bhejein
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
