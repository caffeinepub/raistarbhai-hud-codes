import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Check, Copy, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import type { HudLayout } from "../backend.d";
import { useGetAllHudCodes } from "../hooks/useQueries";

// Fallback layouts shown while loading or as sample data
const FALLBACK_LAYOUTS: HudLayout[] = [
  {
    name: "Freestyle Layout",
    code: "#FFHUDT6O3jjFDVt5Po7eO",
    description:
      "Smooth controls ke liye best layout. Fire button aur joystick ki perfect positioning ke saath designed, har playstyle ke liye suitable.",
  },
  {
    name: "Headshot Special",
    code: "#FFHUDT6O3jk237RPo7eMH",
    description:
      "Pro headshot players ke liye specially crafted. Sensitivity aur fire button placement aise set hai jo quick aim aur headshot assist karta hai.",
  },
];

interface HudCardProps {
  layout: HudLayout;
  index: number;
}

function HudCard({ layout, index }: HudCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(layout.code);
      setCopied(true);
      toast.success("Code copy ho gaya! 🔥", {
        description: `"${layout.name}" code clipboard mein hai.`,
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast.error("Copy nahi hua. Manually select karein.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.02, y: -4 }}
      data-ocid={`hud.card.${index + 1}`}
      className="relative group rounded-xl border border-primary/20 bg-card overflow-hidden glow-orange transition-all duration-300 hover:border-primary/50 hover:glow-orange-intense"
    >
      {/* Top accent bar replaced with gradient corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full pointer-events-none" />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <Badge
              variant="outline"
              className="mb-2 text-xs border-primary/40 text-primary bg-primary/10 font-mono-custom"
            >
              HUD Layout
            </Badge>
            <h3 className="font-display text-xl font-bold text-foreground leading-tight">
              {layout.name}
            </h3>
          </div>
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Zap className="w-5 h-5 text-primary" />
          </div>
        </div>

        {/* Code display */}
        <div className="mb-4 p-3 rounded-lg bg-background/60 border border-border font-mono-custom text-sm text-accent break-all select-all cursor-text">
          {layout.code}
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
          {layout.description}
        </p>

        {/* Copy button */}
        <Button
          data-ocid={`hud.copy_button.${index + 1}`}
          onClick={handleCopy}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 transition-all duration-200"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Code Copy Karein
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
}

export default function HudCodesSection() {
  const { data: layouts, isLoading, isError } = useGetAllHudCodes();

  const displayLayouts =
    layouts && layouts.length > 0 ? layouts : FALLBACK_LAYOUTS;

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl font-black mb-3">
          <span className="text-gradient-fire">HUD Codes</span>
        </h2>
        <p className="text-muted-foreground text-base">
          In codes ko copy karke apna gameplay level up karo
        </p>
      </motion.div>

      {/* Loading state */}
      {isLoading && (
        <div
          data-ocid="hud.loading_state"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[1, 2].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-border p-6 space-y-4"
            >
              <Skeleton className="h-5 w-24 bg-muted" />
              <Skeleton className="h-7 w-40 bg-muted" />
              <Skeleton className="h-10 w-full bg-muted" />
              <Skeleton className="h-16 w-full bg-muted" />
              <Skeleton className="h-10 w-full bg-muted" />
            </div>
          ))}
        </div>
      )}

      {/* Error state */}
      {isError && (
        <div
          data-ocid="hud.error_state"
          className="text-center py-8 text-destructive"
        >
          <p>Codes load nahi ho sake. Please refresh karein.</p>
        </div>
      )}

      {/* Cards grid */}
      {!isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayLayouts.map((layout, i) => (
            <HudCard key={layout.code || i} layout={layout} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
