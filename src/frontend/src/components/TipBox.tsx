import { Lightbulb } from "lucide-react";
import { motion } from "motion/react";

export default function TipBox() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        data-ocid="tip.panel"
        className="relative rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent p-6 md:p-8 overflow-hidden glow-yellow"
      >
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full blur-2xl pointer-events-none" />

        <div className="relative flex gap-4 items-start">
          {/* Icon */}
          <div className="shrink-0 p-3 rounded-xl bg-accent/20 border border-accent/30">
            <Lightbulb className="w-6 h-6 text-accent" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-display font-black text-accent text-lg tracking-wide">
                TIP
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
            </div>
            <p className="text-foreground/85 text-sm md:text-base leading-relaxed">
              Agar koi code{" "}
              <span className="text-destructive font-semibold">"Invalid"</span>{" "}
              dikhaye, toh iska matlab hai ki wo code expire ho gaya hai ya kisi
              doosre server ka hai. Aise mein aap{" "}
              <span className="text-accent font-semibold">
                manually buttons ko adjust
              </span>{" "}
              kar sakte hain (jaise Fire Button ka size{" "}
              <span className="font-mono-custom text-primary font-semibold">
                45–55%
              </span>{" "}
              ke beech rakhein).
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
