import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePWAInstall } from "@/hooks/usePWAInstall";
import {
  Award,
  BookOpen,
  Download,
  Share2,
  Star,
  Users,
  Youtube,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const YOUTUBE_URL = "https://youtube.com/@raibrothers12m?si=ATpjg92UfBU-IxQv";
const YOUTUBE_VIDEO_ID = "6Hipo2xmhFs";

const stats = [
  { icon: Users, value: "500+", label: "Students" },
  { icon: BookOpen, value: "6", label: "Subjects" },
  { icon: Star, value: "5★", label: "Rating" },
  { icon: Award, value: "10+", label: "Years Exp." },
];

export default function HeroSection() {
  const { isInstallable, isInstalled, isIOS, triggerInstall } = usePWAInstall();
  const [showIOSHint, setShowIOSHint] = useState(false);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSHint(true);
      setTimeout(() => setShowIOSHint(false), 5000);
      return;
    }
    await triggerInstall();
  };

  const showInstallButton = !isInstalled && (isInstallable || isIOS);

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
              <span className="text-gradient-edu">BSEB BOARD</span>
              <br />
              <span className="text-foreground">SONU SIR</span>
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-primary mb-3">
              &quot;Ghar Baithe Padho, Safalta Pao&quot;
            </p>

            <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-lg">
              Class 6 se 11 tak ke liye expert guidance. Har subject mein
              complete support, regular tests aur personal attention ke saath
              aapka result guarantee.
            </p>

            {/* YouTube Subscribe Banner */}
            <motion.a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.youtube_banner_link"
              className="block mb-4"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src="/assets/generated/youtube-subscribe-banner.dim_800x200.jpg"
                alt="Subscribe to YouTube - RaiBrothers12M"
                className="w-full max-w-lg rounded-xl shadow-lg border border-red-100 object-cover"
                style={{ maxHeight: "120px" }}
              />
            </motion.a>

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

              {/* YouTube Channel Button */}
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 gap-2 shadow-md"
                  data-ocid="hero.youtube_button"
                >
                  <Youtube className="h-5 w-5" />
                  YouTube Par Padhein
                </Button>
              </a>

              {/* PWA Install Button */}
              {showInstallButton && (
                <Button
                  size="lg"
                  onClick={handleInstallClick}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 gap-2 shadow-md"
                  data-ocid="hero.install_button"
                >
                  {isIOS ? (
                    <Share2 className="h-5 w-5" />
                  ) : (
                    <Download className="h-5 w-5" />
                  )}
                  Install App
                </Button>
              )}
            </div>

            {/* iOS hint tooltip */}
            <AnimatePresence>
              {showIOSHint && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="mt-3 inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary font-medium"
                  data-ocid="hero.install_ios_hint"
                >
                  <Share2 className="h-4 w-4 flex-shrink-0" />
                  Share button tap karo → &quot;Add to Home Screen&quot; select
                  karo
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right: YouTube Video Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-red-500/30"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
                  title="BSEB BOARD SONU SIR - YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {/* Label below video */}
              <div className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-red-600">
                <Youtube className="h-4 w-4" />
                <span>YouTube Par Padhein – Subscribe Zaroor Karein!</span>
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
