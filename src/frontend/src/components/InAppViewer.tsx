import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface InAppViewerProps {
  url: string;
  title: string;
  onClose: () => void;
}

export default function InAppViewer({ url, title, onClose }: InAppViewerProps) {
  const [iframeError, setIframeError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const iframeRefCallback = iframeRef;

  // Attempt to detect iframe block via a timeout heuristic
  useEffect(() => {
    setIframeError(false);
    timeoutRef.current = setTimeout(() => {
      try {
        const doc = iframeRefCallback.current?.contentDocument;
        if (!doc || doc.body?.innerHTML === "") {
          setIframeError(true);
        }
      } catch {
        // Cross-origin access blocked — iframe IS loading fine, don't set error
      }
    }, 8000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [iframeRefCallback]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleOpenNewTab = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-background"
      data-ocid="viewer.modal"
    >
      {/* Top bar */}
      <div className="flex items-center gap-2 px-3 py-2.5 border-b border-border bg-card shadow-sm shrink-0">
        <button
          type="button"
          onClick={onClose}
          className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          aria-label="Band karein"
          data-ocid="viewer.close_button"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-foreground truncate">
            {title}
          </p>
          <p className="text-[10px] text-muted-foreground truncate">
            eVidyarthi – Bihar Board
          </p>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="h-7 px-2.5 text-xs shrink-0 gap-1.5"
          onClick={handleOpenNewTab}
          data-ocid="viewer.secondary_button"
        >
          <ExternalLink className="w-3 h-3" />
          Naye Tab Mein
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 relative overflow-hidden">
        {iframeError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
              📄
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">
                App ke andar nahi khul sakta
              </p>
              <p className="text-sm text-muted-foreground max-w-xs">
                Yeh page seedhe app ke andar nahi dikh sakta. Naye tab mein
                kholne ke liye neeche click karein.
              </p>
            </div>
            <Button
              onClick={handleOpenNewTab}
              className="bg-primary text-primary-foreground gap-2"
              data-ocid="viewer.primary_button"
            >
              <ExternalLink className="w-4 h-4" />
              Naye Tab Mein Kholein
            </Button>
          </div>
        ) : (
          <iframe
            ref={iframeRef}
            src={url}
            title={title}
            className="w-full h-full border-0"
            onError={() => setIframeError(true)}
            allow="fullscreen"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}
