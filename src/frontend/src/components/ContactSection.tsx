import { Button } from "@/components/ui/button";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

const contactItems = [
  {
    icon: Phone,
    title: "Call / WhatsApp",
    value: "+91 98765 43210",
    sub: "Subah 9 baje se Shaam 7 baje tak",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
    action: "tel:+919876543210",
    actionLabel: "Call Karein",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Sonu Sir Class",
    sub: "Near Main Market, Aapka Shehar",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    action: null,
    actionLabel: null,
  },
  {
    icon: Clock,
    title: "Batch Timing",
    value: "Morning & Evening",
    sub: "6–8 AM | 5–7 PM | Saturday Special",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
    action: null,
    actionLabel: null,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 md:py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Contact Karein
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Koi bhi sawaal ho toh seedha call ya WhatsApp karein. Hum jald jawab
            denge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`form-card p-6 ${item.border}`}
              data-ocid={`contact.item.${i + 1}`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4`}
              >
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {item.title}
              </h3>
              <p className={`font-bold text-base ${item.color} mb-0.5`}>
                {item.value}
              </p>
              <p className="text-muted-foreground text-sm">{item.sub}</p>
              {item.action && item.actionLabel && (
                <a href={item.action} className="mt-4 block">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`border-current ${item.color} hover:opacity-80`}
                    data-ocid="contact.primary_button"
                  >
                    {item.actionLabel}
                  </Button>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="form-card p-6 md:p-8 text-center border-green-100 bg-gradient-to-br from-green-50/50 to-white"
        >
          <MessageCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
          <h3 className="font-display font-bold text-xl text-foreground mb-2">
            WhatsApp par Message Karein
          </h3>
          <p className="text-muted-foreground text-sm mb-5 max-w-md mx-auto">
            Admission ke baare mein koi sawaal hai? WhatsApp par seedha poochein
            — Sonu Sir personally reply karenge.
          </p>
          <a
            href="https://wa.me/919876543210?text=Hello%20Sonu%20Sir%2C%20mujhe%20admission%20ke%20baare%20mein%20jaankari%20chahiye."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 shadow-blue-soft"
              data-ocid="contact.primary_button"
            >
              <MessageCircle className="mr-2 w-4 h-4" />
              WhatsApp Karein
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
