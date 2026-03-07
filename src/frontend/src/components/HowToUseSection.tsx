import { CloudUpload, LayoutGrid, MousePointer2, Settings } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: Settings,
    step: "01",
    title: "Settings Mein Jayein",
    description: "Free Fire ki Settings mein jayein.",
  },
  {
    icon: MousePointer2,
    step: "02",
    title: "Controls Tab",
    description: "Controls tab par click karein.",
  },
  {
    icon: LayoutGrid,
    step: "03",
    title: "Custom HUD",
    description: "Custom HUD par click karein.",
  },
  {
    icon: CloudUpload,
    step: "04",
    title: "Code Apply Karein",
    description:
      "Neeche diye gaye Cloud ya Share icon par click karke code paste karein aur Search/Apply kar dein.",
  },
];

export default function HowToUseSection() {
  return (
    <section
      data-ocid="instructions.section"
      className="bg-card/50 border-y border-border py-16"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-black mb-3">
            HUD Code{" "}
            <span className="text-gradient-fire">Kaise Use Karein?</span>
          </h2>
          <p className="text-muted-foreground text-base">
            Sirf 4 simple steps mein apna HUD set karo
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%-1px)] w-5 h-px bg-gradient-to-r from-primary/40 to-transparent z-10" />
                )}

                <div className="rounded-xl border border-border bg-card p-5 h-full hover:border-primary/30 transition-colors duration-200 group">
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-display text-3xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">
                      {item.step}
                    </span>
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-foreground text-base mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
