import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Star, Users } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { icon: Users, value: "500+", label: "Students" },
  { icon: BookOpen, value: "6", label: "Subjects" },
  { icon: Star, value: "5★", label: "Rating" },
  { icon: Award, value: "10+", label: "Years Exp." },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
      {/* Top gradient strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="relative container max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 font-semibold px-3 py-1 text-sm">
              🎓 New Batch Starting Soon!
            </Badge>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              <span className="text-gradient-edu">Sonu Sir</span>
              <br />
              <span className="text-foreground">Class</span>
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-primary mb-3">
              "Ghar Baithe Padho, Safalta Pao"
            </p>

            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg">
              Class 1 se 12 tak ke liye expert guidance. Har subject mein
              complete support, regular tests aur personal attention ke saath
              aapka result guarantee.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#register">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:opacity-90 shadow-blue-medium font-semibold px-8"
                  data-ocid="hero.primary_button"
                >
                  Abhi Register Karein →
                </Button>
              </a>
              <a href="#subjects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 font-semibold px-8"
                  data-ocid="hero.secondary_button"
                >
                  Subjects Dekhein
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right: Preview card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Main card */}
              <div className="form-card p-8 relative overflow-hidden">
                <div className="form-header-stripe absolute top-0 left-0 right-0" />
                <div className="pt-2 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center shadow-blue-soft">
                    <img
                      src="/assets/generated/sonu-sir-logo-transparent.dim_200x200.png"
                      alt="Sonu Sir Class"
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                  <h2 className="font-display font-bold text-xl text-foreground mb-1">
                    Sonu Sir Class
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    Premium Tuition &amp; Coaching
                  </p>
                  <div className="space-y-2.5 text-left">
                    {[
                      "Maths — Expert Faculty",
                      "Science — Lab Practicals",
                      "English — Spoken + Grammar",
                      "All India Board Coverage",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-foreground"
                      >
                        <div className="w-4 h-4 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-success" />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge top-right */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-xl px-3 py-2 shadow-blue-strong text-sm font-bold">
                ✨ Free Demo Class
              </div>
              {/* Floating badge bottom-left */}
              <div className="absolute -bottom-3 -left-4 bg-success text-success-foreground rounded-xl px-3 py-2 shadow-blue-soft text-sm font-bold">
                📚 Offline + Online
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="form-card p-4 text-center hover:shadow-blue-medium transition-shadow duration-300"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-display font-bold text-2xl text-foreground">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
