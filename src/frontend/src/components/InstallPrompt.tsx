import { Button } from "@/components/ui/button";
import { Download, Share, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const DISMISS_KEY = "raisatarbhai_install_dismissed";
const IOS_DISMISS_KEY = "raistarbhai_ios_dismissed";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

function isIOS() {
  return (
    /iphone|ipad|ipod/i.test(navigator.userAgent) &&
    !(window as Window & { MSStream?: unknown }).MSStream
  );
}

function isInStandaloneMode() {
  return (
    "standalone" in navigator &&
    (navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showIOSHint, setShowIOSHint] = useState(false);

  useEffect(() => {
    // Don't show if already installed
    if (isInStandaloneMode()) return;

    // iOS path
    if (isIOS()) {
      const dismissed = localStorage.getItem(IOS_DISMISS_KEY);
      if (!dismissed) {
        const timer = setTimeout(() => setShowIOSHint(true), 3000);
        return () => clearTimeout(timer);
      }
      return;
    }

    // Android / Chrome path
    const dismissed = localStorage.getItem(DISMISS_KEY);
    if (dismissed) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowBanner(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      localStorage.setItem(DISMISS_KEY, "1");
    }
    setDeferredPrompt(null);
    setShowBanner(false);
  };

  const handleDismiss = () => {
    localStorage.setItem(DISMISS_KEY, "1");
    setShowBanner(false);
  };

  const handleIOSDismiss = () => {
    localStorage.setItem(IOS_DISMISS_KEY, "1");
    setShowIOSHint(false);
  };

  return (
    <>
      {/* Android / Chrome install banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            data-ocid="install.panel"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md"
          >
            <div className="relative overflow-hidden rounded-xl border border-primary/40 bg-card shadow-xl glow-orange">
              {/* Orange top accent line */}
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

              <div className="flex items-start gap-3 p-4">
                {/* Icon */}
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 border border-primary/30">
                  <Download className="h-5 w-5 text-primary" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="font-display font-semibold text-foreground text-sm leading-tight">
                    RaiStarBhai app ko Home Screen par install karein!
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Bina browser ke seedha kholein
                  </p>
                </div>

                {/* Dismiss */}
                <button
                  type="button"
                  data-ocid="install.close_button"
                  onClick={handleDismiss}
                  className="shrink-0 rounded-md p-1 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  aria-label="Dismiss"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Install button */}
              <div className="px-4 pb-4">
                <Button
                  data-ocid="install.primary_button"
                  onClick={handleInstall}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold font-display"
                  size="sm"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Install Karo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* iOS hint */}
      <AnimatePresence>
        {showIOSHint && (
          <motion.div
            data-ocid="install.panel"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md"
          >
            <div className="relative overflow-hidden rounded-xl border border-accent/30 bg-card shadow-xl glow-yellow">
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-accent to-transparent" />

              <div className="flex items-center gap-3 p-3 pr-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/20 border border-accent/30">
                  <Share className="h-4 w-4 text-accent" />
                </div>

                <p className="flex-1 text-xs text-muted-foreground leading-snug">
                  <span className="text-accent font-semibold">iOS:</span> Share
                  button <span className="text-foreground font-medium">›</span>{" "}
                  <span className="text-foreground">'Add to Home Screen'</span>
                </p>

                <button
                  type="button"
                  data-ocid="install.close_button"
                  onClick={handleIOSDismiss}
                  className="shrink-0 rounded-md p-1 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  aria-label="Dismiss"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
