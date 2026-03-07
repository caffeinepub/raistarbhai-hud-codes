import { ClipboardList, IndianRupee, Trophy, Users } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Users,
    title: "Small Batches",
    hindi: "छोटे Batch",
    description:
      "Har student ko personal attention mile iske liye hum sirf 15-20 students ka batch rakhte hain.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Trophy,
    title: "Expert Teaching",
    hindi: "Expert Padhai",
    description:
      "10+ saal ke experience ke saath har subject ka syllabus deeply cover kiya jaata hai.",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: IndianRupee,
    title: "Affordable Fees",
    hindi: "Sasti Fees",
    description:
      "Quality education sabke budget mein. Monthly fee structure transparent aur flexible hai.",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    icon: ClipboardList,
    title: "Regular Tests",
    hindi: "Regular Test",
    description:
      "Weekly tests, monthly exams aur detailed performance report se progress track hoti hai.",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-16 md:py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Sonu Sir Class Kyun Chunein?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Hamare saath padhne wale students ki success hi hamaari pehchaan
            hai.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`form-card p-6 group ${feat.border}`}
              data-ocid={`features.item.${i + 1}`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${feat.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
              >
                <feat.icon className={`w-6 h-6 ${feat.color}`} />
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-0.5">
                {feat.title}
              </h3>
              <p className={`text-xs font-semibold ${feat.color} mb-2`}>
                {feat.hindi}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
