import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { SiYoutube } from "react-icons/si";

const YOUTUBE_URL = "https://youtube.com/@new.raistarbhai?feature=shared";

export default function SubscribeBanner() {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-16">
      <motion.a
        href={YOUTUBE_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="subscribe.button"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="block relative overflow-hidden rounded-2xl cursor-pointer group"
        style={{
          background:
            "linear-gradient(135deg, #c00 0%, #e52d27 50%, #b31217 100%)",
          boxShadow:
            "0 0 40px oklch(0.5 0.25 25 / 0.4), 0 0 100px oklch(0.5 0.25 25 / 0.15)",
        }}
      >
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-all duration-500" />

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="relative px-6 py-8 md:px-10 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left content */}
          <div className="flex items-center gap-5">
            <div className="p-3 bg-white/20 rounded-2xl shrink-0 group-hover:bg-white/30 transition-colors">
              <SiYoutube className="w-10 h-10 text-white" />
            </div>
            <div>
              <p className="text-white/70 text-sm font-medium tracking-wide uppercase mb-1">
                Official Channel
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-black text-white leading-tight">
                Hamare YouTube Channel ko
              </h3>
              <h3 className="font-display text-2xl md:text-3xl font-black text-white leading-tight">
                Subscribe Karein!
              </h3>
            </div>
          </div>

          {/* CTA */}
          <div className="shrink-0">
            <div className="flex items-center gap-2 bg-white text-red-600 font-display font-black px-6 py-3 rounded-xl text-base md:text-lg group-hover:bg-red-50 transition-colors shadow-lg">
              <SiYoutube className="w-5 h-5" />
              SUBSCRIBE
              <ExternalLink className="w-4 h-4 opacity-70" />
            </div>
          </div>
        </div>
      </motion.a>
    </section>
  );
}
