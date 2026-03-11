import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Download } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface PDFEntry {
  subject: string;
  chapterName: string;
  pdfUrl: string;
}

const SUBJECTS = [
  {
    name: "Mathematics",
    emoji: "📐",
    color: "bg-blue-50 border-blue-200 text-blue-700",
  },
  {
    name: "Science",
    emoji: "🔬",
    color: "bg-green-50 border-green-200 text-green-700",
  },
  {
    name: "English",
    emoji: "📖",
    color: "bg-purple-50 border-purple-200 text-purple-700",
  },
  {
    name: "Hindi",
    emoji: "✍️",
    color: "bg-orange-50 border-orange-200 text-orange-700",
  },
  {
    name: "Social Science",
    emoji: "🌍",
    color: "bg-yellow-50 border-yellow-200 text-yellow-700",
  },
  {
    name: "Computer",
    emoji: "💻",
    color: "bg-pink-50 border-pink-200 text-pink-700",
  },
];

const DEFAULT_CHAPTERS = [
  "Chapter 1 - Introduction",
  "Chapter 2 - Core Concepts",
  "Chapter 3 - Advanced Topics",
  "Chapter 4 - Practice Problems",
  "Chapter 5 - Revision Notes",
];

export default function SubjectPDFSection() {
  const [pdfs, setPdfs] = useState<PDFEntry[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("sonu_sir_pdfs");
    if (stored) {
      try {
        setPdfs(JSON.parse(stored));
      } catch {
        setPdfs([]);
      }
    }
  }, []);

  const getChaptersForSubject = (subjectName: string) => {
    const stored = pdfs.filter((p) => p.subject === subjectName);
    if (stored.length > 0) {
      return stored.map((p) => ({ name: p.chapterName, url: p.pdfUrl }));
    }
    return DEFAULT_CHAPTERS.map((ch) => ({ name: ch, url: "#" }));
  };

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
            PDF Download Section
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Har subject ke chapter-wise PDF notes download karein. Sirf ₹25 mein
            sabhi subjects ka access!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJECTS.map((subject, idx) => {
            const chapters = getChaptersForSubject(subject.name);
            return (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="form-card overflow-hidden"
                data-ocid={`pdf.item.${idx + 1}`}
              >
                <div className="form-header-stripe" />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center text-xl ${subject.color}`}
                    >
                      {subject.emoji}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground">
                        {subject.name}
                      </h3>
                      <Badge variant="secondary" className="text-xs mt-0.5">
                        {chapters.length} Chapters
                      </Badge>
                    </div>
                  </div>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="chapters" className="border-none">
                      <AccordionTrigger
                        className="py-2 text-sm font-medium text-primary hover:no-underline"
                        data-ocid={`pdf.toggle.${idx + 1}`}
                      >
                        <span className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Chapters Dekhein
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pt-1">
                          {chapters.map((chapter, ci) => (
                            <div
                              key={`${subject.name}-${ci}`}
                              className="flex items-center justify-between gap-2 py-1.5 px-3 rounded-lg bg-secondary/60 hover:bg-secondary transition-colors"
                            >
                              <span className="text-sm text-foreground truncate flex-1">
                                {chapter.name}
                              </span>
                              <a
                                href={chapter.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                              >
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-7 px-2.5 text-xs text-primary border-primary hover:bg-primary hover:text-primary-foreground shrink-0"
                                  data-ocid={`pdf.download_button.${ci + 1}`}
                                >
                                  <Download className="w-3 h-3 mr-1" />
                                  Download
                                </Button>
                              </a>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground text-sm">
            💡 Naye PDFs regularly add kiye jaate hain. Course le lein aur
            hamesha updated rahein!
          </p>
          <a href="#payment" className="mt-4 inline-block">
            <Button
              className="bg-primary text-primary-foreground hover:opacity-90 font-semibold mt-3 px-8 shadow-blue-soft"
              data-ocid="pdf.primary_button"
            >
              Sirf ₹25 Mein Sabhi PDFs Paaein →
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
