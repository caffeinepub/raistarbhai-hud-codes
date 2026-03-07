import {
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
  Languages,
  Monitor,
} from "lucide-react";
import { motion } from "motion/react";

const subjects = [
  {
    icon: Calculator,
    name: "Mathematics",
    hindi: "गणित",
    range: "Class 1 – 12",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: FlaskConical,
    name: "Science",
    hindi: "विज्ञान",
    range: "Class 6 – 12",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    icon: BookOpen,
    name: "English",
    hindi: "अंग्रेज़ी",
    range: "Class 1 – 12",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: Languages,
    name: "Hindi",
    hindi: "हिंदी",
    range: "Class 1 – 12",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: Globe,
    name: "Social Science",
    hindi: "सामाजिक विज्ञान",
    range: "Class 6 – 12",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
  },
  {
    icon: Monitor,
    name: "Computer",
    hindi: "कंप्यूटर",
    range: "Class 3 – 12",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-100",
  },
];

export default function SubjectsSection() {
  return (
    <section id="subjects" className="bg-secondary/40 py-16 md:py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Our Curriculum
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Hum Kya Padhate Hain?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Sabhi important subjects mein expert teachers ke saath complete
            preparation — Board se Competitive tak.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {subjects.map((subject, i) => (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`form-card p-4 text-center cursor-default group ${subject.border}`}
              data-ocid={`subjects.item.${i + 1}`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${subject.bg} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200`}
              >
                <subject.icon className={`w-6 h-6 ${subject.color}`} />
              </div>
              <h3 className="font-semibold text-foreground text-sm leading-tight mb-0.5">
                {subject.name}
              </h3>
              <p className={`text-xs font-medium ${subject.color} mb-1`}>
                {subject.hindi}
              </p>
              <p className="text-xs text-muted-foreground">{subject.range}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
