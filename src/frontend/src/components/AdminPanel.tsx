import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useActor } from "@/hooks/useActor";
import {
  Bell,
  GraduationCap,
  Loader2,
  Lock,
  LogOut,
  Plus,
  Trash2,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

const ADMIN_PASSWORD = "sonusir123";

const SUBJECTS = [
  "Mathematics",
  "Science",
  "English",
  "Hindi",
  "Social Science",
];

const CLASSES = [
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
];

interface Registration {
  studentName: string;
  className: string;
  subject: string;
  mobile: string;
  parentName: string;
  registeredAt: bigint;
}

interface PdfChapter {
  subject: string;
  chapterName: string;
  pdfUrl: string;
  className: string;
}

interface Notice {
  id: bigint;
  text: string;
  createdAt: bigint;
}

function normalizeRegistration(raw: any): Registration {
  return {
    studentName: raw.studentName || raw.student_name || raw.name || "",
    className: raw.className || raw.class_name || raw.className || "",
    subject: raw.subject || "",
    mobile: raw.mobile || "",
    parentName: raw.parentName || raw.parent_name || "",
    registeredAt: raw.registeredAt || raw.registered_at || BigInt(0),
  };
}

export default function AdminPanel() {
  const { actor, isFetching } = useActor();
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [adminLastSeen, setAdminLastSeen] = useState<bigint>(BigInt(0));
  const [isLoadingRegs, setIsLoadingRegs] = useState(false);
  const [regError, setRegError] = useState("");

  const [pdfSubject, setPdfSubject] = useState("");
  const [pdfClass, setPdfClass] = useState("");
  const [pdfChapter, setPdfChapter] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [isAddingPdf, setIsAddingPdf] = useState(false);
  const [pdfEntries, setPdfEntries] = useState<PdfChapter[]>([]);
  const [isLoadingPdfs, setIsLoadingPdfs] = useState(false);

  const [notices, setNotices] = useState<Notice[]>([]);
  const [noticeText, setNoticeText] = useState("");
  const [isAddingNotice, setIsAddingNotice] = useState(false);
  const [isDeletingNotice, setIsDeletingNotice] = useState<bigint | null>(null);
  const [isLoadingNotices, setIsLoadingNotices] = useState(false);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setPasswordError("");
    } else {
      setPasswordError("Galat password! Dobara try karein.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword("");
    setRegistrations([]);
    window.location.hash = "";
  };

  const handleGoHome = () => {
    window.location.hash = "";
  };

  const fetchRegistrations = useCallback(async () => {
    if (!actor) return;
    setIsLoadingRegs(true);
    setRegError("");
    try {
      const result = await actor.getAllRegistrations();
      // Backend returns [Array<StudentRegistration>, bigint]
      const [regs, lastSeen] = result as [any[], bigint];
      setRegistrations(regs.map(normalizeRegistration));
      setAdminLastSeen(lastSeen);
    } catch (err) {
      console.error("fetchRegistrations error:", err);
      setRegError("Registrations load nahi ho payi.");
    } finally {
      setIsLoadingRegs(false);
    }
  }, [actor]);

  const fetchPdfs = useCallback(async () => {
    if (!actor) return;
    setIsLoadingPdfs(true);
    try {
      const chapters = await actor.getAllChapters();
      setPdfEntries(chapters as PdfChapter[]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingPdfs(false);
    }
  }, [actor]);

  const fetchNotices = useCallback(async () => {
    if (!actor) return;
    setIsLoadingNotices(true);
    try {
      const ns = await actor.getNotices();
      setNotices(
        [...(ns as Notice[])].sort(
          (a, b) => Number(b.createdAt) - Number(a.createdAt),
        ),
      );
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingNotices(false);
    }
  }, [actor]);

  useEffect(() => {
    if (isLoggedIn && actor) {
      fetchRegistrations();
      fetchPdfs();
      fetchNotices();
    }
  }, [isLoggedIn, actor, fetchRegistrations, fetchPdfs, fetchNotices]);

  const handleRegistrationsTabOpen = async () => {
    if (!actor) return;
    try {
      await actor.setAdminLastSeen();
      const now = BigInt(Date.now()) * BigInt(1_000_000);
      setAdminLastSeen(now);
    } catch (err) {
      console.error(err);
    }
  };

  const newRegCount = registrations.filter(
    (r) => r.registeredAt > adminLastSeen,
  ).length;

  const handleAddPDF = async () => {
    if (!pdfSubject || !pdfClass || !pdfChapter.trim() || !pdfUrl.trim()) {
      toast.error("Sabhi fields fill karein");
      return;
    }
    if (!actor) return;
    setIsAddingPdf(true);
    try {
      await actor.addPdfChapter(
        pdfSubject,
        pdfChapter.trim(),
        pdfUrl.trim(),
        pdfClass,
      );
      toast.success("PDF chapter add ho gaya!");
      setPdfChapter("");
      setPdfUrl("");
      await fetchPdfs();
    } catch (err) {
      console.error(err);
      toast.error("PDF add nahi ho paya.");
    } finally {
      setIsAddingPdf(false);
    }
  };

  const handleAddNotice = async () => {
    if (!noticeText.trim()) {
      toast.error("Soochna likhein");
      return;
    }
    if (!actor) {
      toast.error("App load ho rahi hai, thoda wait karein");
      return;
    }
    setIsAddingNotice(true);
    try {
      await actor.addNotice(noticeText.trim());
      toast.success("Soochna post ho gayi!");
      setNoticeText("");
      await fetchNotices();
    } catch (err) {
      console.error(err);
      toast.error("Soochna post nahi ho payi.");
    } finally {
      setIsAddingNotice(false);
    }
  };

  const handleDeleteNotice = async (id: bigint) => {
    if (!actor) return;
    setIsDeletingNotice(id);
    try {
      await actor.deleteNotice(id);
      toast.success("Soochna hata di gayi!");
      await fetchNotices();
    } catch (err) {
      console.error(err);
      toast.error("Delete nahi ho paya.");
    } finally {
      setIsDeletingNotice(null);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-secondary/40 flex items-center justify-center px-4">
        <Toaster position="top-center" />
        <div className="form-card w-full max-w-sm overflow-hidden">
          <div className="form-header-stripe" />
          <div className="p-8">
            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-7 h-7 text-primary" />
              </div>
              <h1 className="font-display font-bold text-xl text-foreground">
                Admin Login
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                Sonu Sir Class — Admin Panel
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="admin-password" className="text-sm font-medium">
                  Password
                </Label>
                <Input
                  id="admin-password"
                  type="password"
                  placeholder="Password daalen..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  className={passwordError ? "border-destructive" : ""}
                  data-ocid="admin.input"
                />
                {passwordError && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="admin.error_state"
                  >
                    {passwordError}
                  </p>
                )}
              </div>
              <Button
                onClick={handleLogin}
                className="w-full bg-primary text-primary-foreground hover:opacity-90 font-semibold"
                data-ocid="admin.submit_button"
              >
                Login Karein
              </Button>
            </div>
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={handleGoHome}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                data-ocid="admin.secondary_button"
              >
                ← Main Site par Jaayein
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/40">
      <Toaster position="top-center" />
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-xs px-4 py-3">
        <div className="container max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/uploads/Screenshot_20260310-195245-1.jpg"
              alt="Sonu Sir Class"
              className="w-9 h-9 rounded-full object-cover border border-border"
            />
            <div>
              <span className="font-display font-bold text-foreground">
                Admin Panel
              </span>
              <p className="text-xs text-muted-foreground leading-none">
                Sonu Sir Class
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {newRegCount > 0 && (
              <div className="flex items-center gap-1.5 bg-red-50 border border-red-200 rounded-full px-3 py-1">
                <Bell className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                <span className="text-xs font-semibold text-red-600">
                  {newRegCount} naya!
                </span>
              </div>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="text-muted-foreground hover:text-destructive"
              data-ocid="admin.secondary_button"
            >
              <LogOut className="w-4 h-4 mr-1.5" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container max-w-6xl mx-auto px-4 py-8">
        <Tabs
          defaultValue="notices"
          onValueChange={(val) => {
            if (val === "registrations") handleRegistrationsTabOpen();
          }}
        >
          <TabsList className="mb-6 bg-white border border-border shadow-xs">
            <TabsTrigger value="notices" data-ocid="admin.tab">
              📋 Soochna Board
              {notices.length > 0 && (
                <Badge className="ml-2 bg-amber-600 text-white text-xs h-5 px-1.5">
                  {notices.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger
              value="registrations"
              data-ocid="admin.tab"
              className="relative"
            >
              Registrations
              {newRegCount > 0 ? (
                <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold">
                  {newRegCount}
                </span>
              ) : registrations.length > 0 ? (
                <Badge className="ml-2 bg-primary text-primary-foreground text-xs h-5 px-1.5">
                  {registrations.length}
                </Badge>
              ) : null}
            </TabsTrigger>
            <TabsTrigger value="pdfs" data-ocid="admin.tab">
              PDF Management
              {pdfEntries.length > 0 && (
                <Badge className="ml-2 bg-green-600 text-white text-xs h-5 px-1.5">
                  {pdfEntries.length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          {/* Soochna Board Tab */}
          <TabsContent value="notices">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Add Notice */}
              <div className="form-card overflow-hidden">
                <div className="form-header-stripe" />
                <div className="p-6">
                  <h2 className="font-display font-bold text-lg text-foreground mb-1">
                    Nai Soochna Post Karein
                  </h2>
                  <p className="text-xs text-muted-foreground mb-5">
                    Yeh soochna sabhi students ko dikhegi app ke upar.
                  </p>
                  {isFetching && (
                    <div className="mb-4 flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                      <Loader2 className="w-3.5 h-3.5 text-amber-600 animate-spin shrink-0" />
                      <p className="text-xs text-amber-700 font-medium">
                        App connect ho rahi hai, thoda wait karein...
                      </p>
                    </div>
                  )}
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium">
                        Soochna ka Sandesh
                      </Label>
                      <textarea
                        className="w-full min-h-[100px] rounded-lg border border-input bg-background px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="Jaise: Kal ka class band rahega. Agle Monday ko test hoga."
                        value={noticeText}
                        onChange={(e) => setNoticeText(e.target.value)}
                        data-ocid="admin.textarea"
                      />
                    </div>
                    <Button
                      onClick={handleAddNotice}
                      disabled={isAddingNotice || isFetching || !actor}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold disabled:opacity-60"
                      data-ocid="admin.submit_button"
                    >
                      {isAddingNotice ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : isFetching ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <Plus className="w-4 h-4 mr-2" />
                      )}
                      {isFetching
                        ? "Connect ho rahi hai..."
                        : "Soochna Post Karein"}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Existing Notices */}
              <div className="form-card overflow-hidden">
                <div className="form-header-stripe" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-display font-bold text-lg text-foreground">
                      Active Soochnayen ({notices.length})
                    </h2>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={fetchNotices}
                      disabled={isLoadingNotices}
                      data-ocid="admin.secondary_button"
                    >
                      {isLoadingNotices ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        "Refresh"
                      )}
                    </Button>
                  </div>
                  {isLoadingNotices ? (
                    <div
                      className="text-center py-10"
                      data-ocid="admin.loading_state"
                    >
                      <Loader2 className="w-6 h-6 mx-auto animate-spin text-primary" />
                    </div>
                  ) : notices.length === 0 ? (
                    <div
                      className="text-center py-10 text-muted-foreground"
                      data-ocid="admin.empty_state"
                    >
                      <p className="text-sm">Abhi koi soochna nahi hai.</p>
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-80 overflow-y-auto">
                      {notices.map((notice, i) => (
                        <div
                          key={String(notice.id)}
                          className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 border border-amber-200"
                          data-ocid={`admin.item.${i + 1}`}
                        >
                          <span className="text-base mt-0.5">📌</span>
                          <p className="text-sm text-gray-800 flex-1 leading-snug">
                            {notice.text}
                          </p>
                          <button
                            type="button"
                            onClick={() => handleDeleteNotice(notice.id)}
                            disabled={isDeletingNotice === notice.id}
                            className="shrink-0 p-1.5 rounded-lg text-red-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                            data-ocid={`admin.delete_button.${i + 1}`}
                          >
                            {isDeletingNotice === notice.id ? (
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            ) : (
                              <Trash2 className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Registrations Tab */}
          <TabsContent value="registrations">
            <div className="form-card overflow-hidden">
              <div className="form-header-stripe" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display font-bold text-lg text-foreground">
                    Student Registrations ({registrations.length})
                  </h2>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={fetchRegistrations}
                    disabled={isLoadingRegs}
                    data-ocid="admin.secondary_button"
                  >
                    {isLoadingRegs ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      "Refresh"
                    )}
                  </Button>
                </div>
                {newRegCount > 0 && (
                  <div className="mb-4 flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    <Bell className="w-4 h-4 text-red-500 shrink-0" />
                    <p className="text-sm font-semibold text-red-700">
                      🔔 {newRegCount} naye registration
                      {newRegCount > 1 ? "s" : ""} aaye hain!
                    </p>
                  </div>
                )}
                {isLoadingRegs ? (
                  <div
                    className="text-center py-12 text-muted-foreground"
                    data-ocid="admin.loading_state"
                  >
                    <Loader2 className="w-8 h-8 mx-auto mb-3 animate-spin text-primary" />
                    <p>Load ho raha hai...</p>
                  </div>
                ) : regError ? (
                  <div
                    className="text-center py-12"
                    data-ocid="admin.error_state"
                  >
                    <p className="text-destructive text-sm">{regError}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={fetchRegistrations}
                      className="mt-3"
                    >
                      Dobara Try Karein
                    </Button>
                  </div>
                ) : registrations.length === 0 ? (
                  <div
                    className="text-center py-12 text-muted-foreground"
                    data-ocid="admin.empty_state"
                  >
                    <GraduationCap className="w-10 h-10 mx-auto mb-3 opacity-30" />
                    <p>Abhi koi registration nahi hai.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto" data-ocid="admin.table">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>#</TableHead>
                          <TableHead>Student Naam</TableHead>
                          <TableHead>Class</TableHead>
                          <TableHead>Subject</TableHead>
                          <TableHead>Mobile</TableHead>
                          <TableHead>Parent</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {registrations.map((reg, i) => {
                          const isNew = reg.registeredAt > adminLastSeen;
                          const regDate = new Date(
                            Number(reg.registeredAt / BigInt(1_000_000)),
                          );
                          return (
                            <TableRow
                              key={String(reg.registeredAt) + reg.mobile}
                              data-ocid={`admin.row.${i + 1}`}
                              className={isNew ? "bg-red-50/50" : ""}
                            >
                              <TableCell className="text-muted-foreground text-sm">
                                {i + 1}
                              </TableCell>
                              <TableCell className="font-medium">
                                {reg.studentName.trim() || "—"}
                              </TableCell>
                              <TableCell>{reg.className || "—"}</TableCell>
                              <TableCell>{reg.subject || "—"}</TableCell>
                              <TableCell className="font-mono">
                                {reg.mobile || "—"}
                              </TableCell>
                              <TableCell>{reg.parentName || "—"}</TableCell>
                              <TableCell className="text-xs text-muted-foreground">
                                {regDate.toLocaleDateString("en-IN")}
                              </TableCell>
                              <TableCell>
                                {isNew ? (
                                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                                    Naya
                                  </span>
                                ) : (
                                  <span className="text-xs text-muted-foreground">
                                    Dekha
                                  </span>
                                )}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          {/* PDF Management Tab */}
          <TabsContent value="pdfs">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-card overflow-hidden">
                <div className="form-header-stripe" />
                <div className="p-6">
                  <h2 className="font-display font-bold text-lg text-foreground mb-5">
                    Naya PDF Chapter Add Karein
                  </h2>
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium">Subject</Label>
                      <Select value={pdfSubject} onValueChange={setPdfSubject}>
                        <SelectTrigger data-ocid="admin.select">
                          <SelectValue placeholder="Subject chunein..." />
                        </SelectTrigger>
                        <SelectContent>
                          {SUBJECTS.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium">Class</Label>
                      <Select value={pdfClass} onValueChange={setPdfClass}>
                        <SelectTrigger data-ocid="admin.select">
                          <SelectValue placeholder="Class chunein..." />
                        </SelectTrigger>
                        <SelectContent>
                          {CLASSES.map((c) => (
                            <SelectItem key={c} value={c}>
                              {c}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium">
                        Chapter Name
                      </Label>
                      <Input
                        placeholder="Jaise: Adhyay 1 - Number System"
                        value={pdfChapter}
                        onChange={(e) => setPdfChapter(e.target.value)}
                        data-ocid="admin.input"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium">
                        PDF URL / Link
                      </Label>
                      <Input
                        placeholder="https://drive.google.com/..."
                        value={pdfUrl}
                        onChange={(e) => setPdfUrl(e.target.value)}
                        data-ocid="admin.input"
                      />
                    </div>
                    <Button
                      onClick={handleAddPDF}
                      disabled={isAddingPdf}
                      className="w-full bg-primary text-primary-foreground hover:opacity-90 font-semibold"
                      data-ocid="admin.submit_button"
                    >
                      {isAddingPdf ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <Plus className="w-4 h-4 mr-2" />
                      )}
                      PDF Add Karein
                    </Button>
                  </div>
                </div>
              </div>
              <div className="form-card overflow-hidden">
                <div className="form-header-stripe" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-display font-bold text-lg text-foreground">
                      Saved PDFs ({pdfEntries.length})
                    </h2>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={fetchPdfs}
                      disabled={isLoadingPdfs}
                      data-ocid="admin.secondary_button"
                    >
                      {isLoadingPdfs ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        "Refresh"
                      )}
                    </Button>
                  </div>
                  {pdfEntries.length === 0 ? (
                    <div
                      className="text-center py-10 text-muted-foreground"
                      data-ocid="admin.empty_state"
                    >
                      <p className="text-sm">
                        Abhi koi PDF nahi add kiya gaya.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {pdfEntries.map((pdf, i) => (
                        <div
                          key={`${pdf.subject}-${pdf.className}-${i}`}
                          className="p-3 rounded-lg bg-secondary/60"
                          data-ocid={`admin.item.${i + 1}`}
                        >
                          <div className="flex gap-2 mb-1 flex-wrap">
                            <Badge variant="outline" className="text-xs">
                              {pdf.subject}
                            </Badge>
                            <Badge className="text-xs bg-primary/10 text-primary border-0">
                              {pdf.className}
                            </Badge>
                          </div>
                          <p className="text-sm font-medium text-foreground truncate">
                            {pdf.chapterName}
                          </p>
                          <p className="text-xs text-muted-foreground truncate mt-0.5">
                            {pdf.pdfUrl}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
