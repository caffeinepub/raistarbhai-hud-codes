import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { biharBoard } from "@/data/biharBoardData";
import { useActor } from "@/hooks/useActor";
import { useQuery } from "@tanstack/react-query";
import { BookOpen, Download, ExternalLink, FileText } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

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

  if (isLoading && eVidyarthiMaterials.length === 0) {
    return (
      <div
        className="py-8 text-center text-muted-foreground text-sm"
        data-ocid="pdf.loading_state"
      >
        <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
        Load ho raha hai...
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {/* Bihar Board Chapters */}
      {eVidyarthiMaterials.length > 0 && (
        <div className="mb-4">
          <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
            Bihar Board – Sabhi Adhyay
          </div>
          <div className="space-y-1.5">
            {eVidyarthiMaterials.map((material, i) => (
              <div
                key={material.name}
                className="flex items-center justify-between gap-3 py-2.5 px-3 rounded-xl bg-secondary/60 hover:bg-secondary transition-colors border border-border/50"
                data-ocid={`pdf.item.${i + 1}`}
              >
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-xs font-bold text-primary">
                    {i + 1}
                  </div>
                  <span className="text-sm font-medium text-foreground truncate">
                    {material.name}
                  </span>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 px-3 text-xs text-primary border-primary/40 hover:bg-primary hover:text-white hover:border-primary shrink-0 gap-1.5"
                  onClick={() =>
                    window.open(material.url, "_blank", "noopener,noreferrer")
                  }
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

      {/* Teacher uploaded PDFs */}
      {pdfs && pdfs.length > 0 && (
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
            Teacher ke Extra Notes
          </div>
          <div className="space-y-1.5">
            {pdfs.map((pdf, i) => (
              <div
                key={`${pdf.chapterName}-${i}`}
                className="flex items-center justify-between gap-3 py-2.5 px-3 rounded-xl bg-secondary/60 hover:bg-secondary transition-colors"
                data-ocid={`pdf.item.${eVidyarthiMaterials.length + i + 1}`}
              >
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <BookOpen className="w-3 h-3 text-primary" />
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
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 px-3 text-xs text-primary border-primary/40 hover:bg-primary hover:text-white shrink-0"
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
            {className} ke liye abhi koi content nahi hai.
          </p>
        </div>
      )}
    </div>
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
          <p className="text-sm text-muted-foreground mb-4">
            Class chunein, phir padhna chahein wala adhyay click karein.
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
            Bihar Board – Adhyay-wise Notes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Class 6 se 11 tak – sabhi subjects ke notes aur adhyay ek jagah.
          </p>
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
      </div>
    </section>
  );
}
