import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { biharBoard } from "@/data/biharBoardData";
import { useActor } from "@/hooks/useActor";
import { useQuery } from "@tanstack/react-query";
import { BookOpen, Download, ExternalLink, FileText } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import InAppViewer from "./InAppViewer";

const SUBJECTS = [
  {
    name: "Mathematics",
    emoji: "📐",
    color: "bg-blue-50 border-blue-200 text-blue-700",
    accent: "border-blue-400",
  },
  {
    name: "Science",
    emoji: "🔬",
    color: "bg-green-50 border-green-200 text-green-700",
    accent: "border-green-400",
  },
  {
    name: "English",
    emoji: "📖",
    color: "bg-purple-50 border-purple-200 text-purple-700",
    accent: "border-purple-400",
  },
  {
    name: "Hindi",
    emoji: "✍️",
    color: "bg-orange-50 border-orange-200 text-orange-700",
    accent: "border-orange-400",
  },
  {
    name: "Social Science",
    emoji: "🌍",
    color: "bg-yellow-50 border-yellow-200 text-yellow-700",
    accent: "border-yellow-400",
  },
];

const CLASSES = [
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
];

function SubjectClassPDFs({
  subject,
  className,
}: { subject: string; className: string }) {
  const { actor, isFetching } = useActor();
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [viewerUrl, setViewerUrl] = useState<string | null>(null);
  const [viewerTitle, setViewerTitle] = useState("");

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const { data: pdfs, isLoading } = useQuery({
    queryKey: ["pdfs", subject, className],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getChaptersBySubjectAndClass(subject, className);
    },
    enabled: !!actor && !isFetching,
  });

  const eVidyarthiMaterials = biharBoard[subject]?.[className] ?? [];
  const hasContent =
    eVidyarthiMaterials.length > 0 || (pdfs && pdfs.length > 0);

  const openViewer = (url: string, name: string) => {
    setViewerUrl(url);
    setViewerTitle(name);
  };

  if (isLoading && eVidyarthiMaterials.length === 0) {
    return (
      <div
        className="py-8 text-center text-muted-foreground text-sm"
        data-ocid="pdf.loading_state"
      >
        <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
        PDFs load ho rahi hain...
      </div>
    );
  }

  return (
    <>
      {viewerUrl && (
        <InAppViewer
          url={viewerUrl}
          title={viewerTitle}
          onClose={() => setViewerUrl(null)}
        />
      )}

      <div className="space-y-2">
        {isOffline && (
          <div
            className="mb-3 text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 flex items-center gap-2"
            data-ocid="pdf.error_state"
          >
            ⚠️ Aap offline hain. Sirf pehle dekhe gaye PDFs milenge.
          </div>
        )}

        {/* eVidyarthi Bihar Board Materials */}
        {eVidyarthiMaterials.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                📚 Bihar Board – eVidyarthi
              </span>
            </div>
            <div className="space-y-2">
              {eVidyarthiMaterials.map((material, i) => (
                <div
                  key={material.name}
                  className="flex items-center justify-between gap-3 py-2.5 px-4 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100/70 transition-colors"
                  data-ocid={`pdf.item.${i + 1}`}
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                      <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-sm font-medium text-foreground truncate block">
                        {material.name}
                      </span>
                      <Badge className="mt-0.5 text-[9px] px-1.5 py-0 h-4 bg-emerald-600 text-white hover:bg-emerald-700">
                        eVidyarthi
                      </Badge>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 px-3 text-xs border-emerald-400 text-emerald-700 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 shrink-0 gap-1.5"
                    onClick={() => openViewer(material.url, material.name)}
                    data-ocid={`pdf.secondary_button.${i + 1}`}
                  >
                    <ExternalLink className="w-3 h-3" />
                    Padhein
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Admin-uploaded PDFs */}
        {pdfs && pdfs.length > 0 && (
          <div>
            {eVidyarthiMaterials.length > 0 && (
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  📁 Teacher ke PDFs
                </span>
              </div>
            )}
            <div className="space-y-2">
              {pdfs.map((pdf, i) => (
                <div
                  key={`${pdf.chapterName}-${i}`}
                  className="flex items-center justify-between gap-3 py-2.5 px-4 rounded-xl bg-secondary/60 hover:bg-secondary transition-colors"
                  data-ocid={`pdf.item.${eVidyarthiMaterials.length + i + 1}`}
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <BookOpen className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground truncate">
                      {pdf.chapterName}
                    </span>
                  </div>
                  <a
                    href={pdf.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    onClick={async () => {
                      if ("caches" in window) {
                        try {
                          const cache = await caches.open("sonu-sir-pdfs-v1");
                          await cache.add(pdf.pdfUrl);
                        } catch {
                          // Silently fail if caching not possible
                        }
                      }
                    }}
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 px-3 text-xs text-primary border-primary/40 hover:bg-primary hover:text-primary-foreground shrink-0"
                      data-ocid={`pdf.download_button.${i + 1}`}
                    >
                      <Download className="w-3 h-3 mr-1.5" />
                      Download
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {!hasContent && !isLoading && (
          <div className="py-8 text-center" data-ocid="pdf.empty_state">
            <FileText className="w-10 h-10 mx-auto mb-3 text-muted-foreground/40" />
            <p className="text-sm text-muted-foreground">
              {className} ke liye abhi koi PDF nahi hai.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1">
              Jald hi add kiye jaayenge!
            </p>
          </div>
        )}
      </div>
    </>
  );
}

function SubjectDetailView({
  subject,
  onBack,
}: { subject: (typeof SUBJECTS)[0]; onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Back button + Subject header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          type="button"
          onClick={onBack}
          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
          data-ocid="pdf.secondary_button"
        >
          ← Wapas Jaayein
        </button>
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-semibold ${subject.color}`}
        >
          <span>{subject.emoji}</span>
          <span>{subject.name}</span>
        </div>
      </div>

      <div className="form-card overflow-hidden">
        <div className="form-header-stripe" />
        <div className="p-5">
          <p className="text-sm text-muted-foreground mb-1">
            Bihar Board ke sabhi notes aur PDFs – App ke andar hi padhein!
          </p>
          <p className="text-xs text-emerald-600 font-medium mb-4">
            📚 eVidyarthi ke saath powered
          </p>
          <Tabs defaultValue={CLASSES[0]}>
            <TabsList className="flex flex-wrap h-auto gap-1.5 bg-secondary/60 p-1.5 rounded-xl mb-5">
              {CLASSES.map((cls) => (
                <TabsTrigger
                  key={cls}
                  value={cls}
                  className="rounded-lg text-xs font-semibold px-3 py-1.5 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
                  data-ocid="pdf.tab"
                >
                  {cls}
                </TabsTrigger>
              ))}
            </TabsList>
            {CLASSES.map((cls) => (
              <TabsContent key={cls} value={cls}>
                <SubjectClassPDFs subject={subject.name} className={cls} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
}

export default function SubjectPDFSection() {
  const [selectedSubject, setSelectedSubject] = useState<
    (typeof SUBJECTS)[0] | null
  >(null);

  return (
    <section id="pdfs" className="bg-secondary/40 py-16 md:py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Study Material
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Study Materials – Bihar Board (eVidyarthi)
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Bihar Board ke sabhi subjects ke notes aur PDFs – Class 6 se 11 tak.
            App ke andar hi padhein!
          </p>
          <div className="mt-3 inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full">
            <span>📚</span>
            <span>eVidyarthi ke saath powered – Bilkul FREE</span>
          </div>
        </motion.div>

        {selectedSubject ? (
          <SubjectDetailView
            subject={selectedSubject}
            onBack={() => setSelectedSubject(null)}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SUBJECTS.map((subject, idx) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
              >
                <button
                  type="button"
                  className={`w-full text-left form-card overflow-hidden hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 border-l-4 ${subject.accent}`}
                  onClick={() => setSelectedSubject(subject)}
                  data-ocid={`pdf.item.${idx + 1}`}
                >
                  <div className="form-header-stripe" />
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-12 h-12 rounded-xl border flex items-center justify-center text-2xl ${subject.color}`}
                      >
                        {subject.emoji}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-foreground">
                          {subject.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Class 6 – 11
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1 flex-wrap">
                        {["6", "7", "8", "9", "10", "11"].map((cls) => (
                          <Badge
                            key={cls}
                            variant="secondary"
                            className="text-[10px] px-1.5 py-0"
                          >
                            {cls}
                          </Badge>
                        ))}
                      </div>
                      <span className="text-xs text-primary font-semibold">
                        Dekhein →
                      </span>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground text-sm">
            💡 Naye PDFs aur notes regularly add kiye jaate hain. Ab sabhi Bihar
            Board materials bilkul free mein padhein!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
