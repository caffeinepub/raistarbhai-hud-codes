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
import { useActor } from "@/hooks/useActor";
import { CalendarCheck, CheckCircle2, Loader2, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

const CLASSES = [
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
];

type StatusType =
  | "idle"
  | "loading"
  | "success"
  | "alreadyMarked"
  | "closed"
  | "error";

export default function AttendanceSection() {
  const { actor, isFetching } = useActor();

  const [studentName, setStudentName] = useState("");
  const [className, setClassName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [status, setStatus] = useState<StatusType>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [windowOpen, setWindowOpen] = useState<boolean | null>(null);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (!actor) return;
    actor
      .getAttendanceWindowStatus()
      .then((open) => {
        setWindowOpen(open);
      })
      .catch(() => setWindowOpen(false));
  }, [actor]);

  const handleSubmit = async () => {
    if (!studentName.trim() || !className || !rollNumber.trim()) {
      setStatus("error");
      setErrorMsg("Sabhi fields bharna zaroori hai.");
      return;
    }
    if (!actor) {
      setStatus("error");
      setErrorMsg("App connect ho rahi hai, thoda wait karein.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const result = await actor.markAttendance(
        studentName.trim(),
        className,
        rollNumber.trim(),
        today,
      );

      if (result === "ok") {
        setStatus("success");
        setStudentName("");
        setClassName("");
        setRollNumber("");
      } else if (result === "alreadyMarked") {
        setStatus("alreadyMarked");
      } else if (result === "closed") {
        setStatus("closed");
      } else {
        setStatus("error");
        setErrorMsg("Kuch problem aayi. Dobara try karein.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Server se connect nahi ho paya. Baad mein try karein.");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setErrorMsg("");
  };

  return (
    <section
      id="attendance"
      className="py-12 px-4"
      data-ocid="attendance.section"
    >
      <div className="container max-w-xl mx-auto">
        <div className="form-card overflow-hidden">
          <div className="form-header-stripe" />
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <CalendarCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-display font-bold text-xl text-foreground leading-tight">
                  Online Attendance
                </h2>
                <p className="text-sm text-muted-foreground">
                  Aaj ki attendance lagaayein — {today}
                </p>
              </div>
            </div>

            {/* Window closed notice */}
            {windowOpen === false &&
              status !== "success" &&
              status !== "alreadyMarked" && (
                <div
                  className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4"
                  data-ocid="attendance.error_state"
                >
                  <XCircle className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-700 text-sm">
                      Attendance abhi band hai
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Sir ne abhi attendance kholi nahi hai. Thodi der mein
                      dobara try karein.
                    </p>
                  </div>
                </div>
              )}

            {/* Success state */}
            {status === "success" && (
              <div
                className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4 mb-4"
                data-ocid="attendance.success_state"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-800 text-sm">
                    Aapki attendance lag gayi! ✅
                  </p>
                  <p className="text-xs text-green-700 mt-0.5">
                    Aaj ki haziri safaltapoorvak darj ho gayi hai.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-2 text-xs text-green-700 underline underline-offset-2 hover:text-green-900"
                  >
                    Dobara lagaayein
                  </button>
                </div>
              </div>
            )}

            {/* Already marked state */}
            {status === "alreadyMarked" && (
              <div
                className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4"
                data-ocid="attendance.error_state"
              >
                <XCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 text-sm">
                    Aaj ki attendance pehle se lag chuki hai. ⚠️
                  </p>
                  <p className="text-xs text-amber-700 mt-0.5">
                    Ek din mein ek baar hi attendance lag sakti hai.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-2 text-xs text-amber-700 underline underline-offset-2 hover:text-amber-900"
                  >
                    Wapas jaayein
                  </button>
                </div>
              </div>
            )}

            {/* Closed state */}
            {status === "closed" && (
              <div
                className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4"
                data-ocid="attendance.error_state"
              >
                <XCircle className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-700 text-sm">
                    Attendance abhi band hai.
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Sir ne attendance window band kar di hai. Baad mein try
                    karein.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-2 text-xs text-gray-600 underline underline-offset-2"
                  >
                    Wapas jaayein
                  </button>
                </div>
              </div>
            )}

            {/* Error state */}
            {status === "error" && (
              <div
                className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-4"
                data-ocid="attendance.error_state"
              >
                <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-800 text-sm">
                    {errorMsg}
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-2 text-xs text-red-700 underline underline-offset-2 hover:text-red-900"
                  >
                    Dobara try karein
                  </button>
                </div>
              </div>
            )}

            {/* Form — hide after success or alreadyMarked */}
            {status !== "success" &&
              status !== "alreadyMarked" &&
              status !== "closed" && (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="att-name"
                      className="text-sm font-medium text-foreground"
                    >
                      Aapka Naam <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="att-name"
                      placeholder="Poora naam likhein..."
                      value={studentName}
                      onChange={(e) => {
                        setStudentName(e.target.value);
                        if (status === "error") handleReset();
                      }}
                      data-ocid="attendance.input"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-sm font-medium text-foreground">
                      Class <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={className}
                      onValueChange={(v) => {
                        setClassName(v);
                        if (status === "error") handleReset();
                      }}
                    >
                      <SelectTrigger data-ocid="attendance.select">
                        <SelectValue placeholder="Apni class chunein..." />
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
                    <Label
                      htmlFor="att-roll"
                      className="text-sm font-medium text-foreground"
                    >
                      Roll Number <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="att-roll"
                      placeholder="Jaise: 15"
                      value={rollNumber}
                      onChange={(e) => {
                        setRollNumber(e.target.value);
                        if (status === "error") handleReset();
                      }}
                      data-ocid="attendance.input"
                    />
                  </div>

                  {isFetching && (
                    <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                      <Loader2 className="w-3.5 h-3.5 text-amber-600 animate-spin shrink-0" />
                      <p className="text-xs text-amber-700">
                        App connect ho rahi hai...
                      </p>
                    </div>
                  )}

                  <Button
                    onClick={handleSubmit}
                    disabled={
                      status === "loading" ||
                      isFetching ||
                      !actor ||
                      windowOpen === false
                    }
                    className="w-full bg-primary text-primary-foreground hover:opacity-90 font-semibold h-11"
                    data-ocid="attendance.submit_button"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Lag rahi hai...
                      </>
                    ) : (
                      <>
                        <CalendarCheck className="w-4 h-4 mr-2" />
                        {windowOpen === false
                          ? "Attendance Band Hai"
                          : "Attendance Lagaayein"}
                      </>
                    )}
                  </Button>
                </div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
