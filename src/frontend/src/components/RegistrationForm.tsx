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
import { CheckCircle2, GraduationCap, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const CLASSES = [
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
];

const SUBJECTS = [
  "Mathematics",
  "Science",
  "English",
  "Hindi",
  "Social Science",
  "Computer",
  "All Subjects",
];

export default function RegistrationForm() {
  const { actor } = useActor();
  const [formData, setFormData] = useState({
    studentName: "",
    className: "",
    subject: "",
    mobile: "",
    parentName: "",
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.studentName.trim()) {
      newErrors.studentName = "Student ka naam required hai";
    }
    if (!formData.className) {
      newErrors.className = "Class select karein";
    }
    if (!formData.subject) {
      newErrors.subject = "Subject select karein";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number required hai";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Valid 10-digit mobile number daalen";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitError("");
    setIsSubmitting(true);

    try {
      if (!actor) throw new Error("Actor not ready");
      await actor.registerStudent(
        formData.studentName,
        formData.className,
        formData.subject,
        formData.mobile,
        formData.parentName,
      );
      setIsSuccess(true);
    } catch (err) {
      console.error("Registration failed:", err);
      setSubmitError("Registration nahi ho payi. Dobara try karein.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmitError("");
    setFormData({
      studentName: "",
      className: "",
      subject: "",
      mobile: "",
      parentName: "",
    });
    setErrors({});
  };

  return (
    <section id="register" className="bg-secondary/40 py-16 md:py-20">
      <div className="container max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Admission Open
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Registration Form
          </h2>
          <p className="text-muted-foreground text-base">
            Form bharein aur Sonu Sir aapko jald contact karenge.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="form-card overflow-hidden"
        >
          {/* Google Forms-style header stripe */}
          <div className="form-header-stripe" />

          {/* Form title bar */}
          <div className="px-6 pt-6 pb-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground leading-tight">
                  Sonu Sir Class
                </h3>
                <p className="text-sm text-muted-foreground">
                  Student Admission Form
                </p>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 py-10 text-center"
                data-ocid="form.success_state"
              >
                <div className="w-16 h-16 rounded-full bg-success/15 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9 text-success" />
                </div>
                <h4 className="font-display font-bold text-xl text-foreground mb-2">
                  Registration Ho Gayi! 🎉
                </h4>
                <p className="text-muted-foreground text-base mb-6 max-w-sm mx-auto">
                  Sonu Sir aapko jald contact karenge. Demo class ke liye tayyar
                  rahein!
                </p>
                <div className="success-banner px-4 py-3 mb-6 text-sm text-success font-medium">
                  ✅ Registration ho gayi! Sonu Sir aapko jald contact karenge.
                </div>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5"
                  onClick={handleReset}
                  data-ocid="form.secondary_button"
                >
                  Ek Aur Register Karein
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="px-6 py-6 space-y-5"
                noValidate
              >
                {submitError && (
                  <div
                    className="bg-destructive/10 border border-destructive/30 rounded-lg px-4 py-3 text-sm text-destructive"
                    data-ocid="form.error_state"
                  >
                    {submitError}
                  </div>
                )}

                {/* Student Name */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="studentName"
                    className="text-sm font-medium text-foreground"
                  >
                    Student ka Poora Naam{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="studentName"
                    type="text"
                    placeholder="Jaise: Rahul Kumar"
                    value={formData.studentName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        studentName: e.target.value,
                      }))
                    }
                    className={`bg-white border-border focus:border-primary focus:ring-primary/20 ${
                      errors.studentName ? "border-destructive" : ""
                    }`}
                    data-ocid="form.student_name.input"
                    autoComplete="name"
                  />
                  {errors.studentName && (
                    <p
                      className="text-xs text-destructive mt-1"
                      data-ocid="form.student_name.error_state"
                    >
                      {errors.studentName}
                    </p>
                  )}
                </div>

                {/* Class */}
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-foreground">
                    Class <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.className}
                    onValueChange={(val) =>
                      setFormData((prev) => ({ ...prev, className: val }))
                    }
                  >
                    <SelectTrigger
                      className={`bg-white border-border focus:border-primary ${
                        errors.className ? "border-destructive" : ""
                      }`}
                      data-ocid="form.class.select"
                    >
                      <SelectValue placeholder="Apni class chunein..." />
                    </SelectTrigger>
                    <SelectContent>
                      {CLASSES.map((cls) => (
                        <SelectItem key={cls} value={cls}>
                          {cls}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.className && (
                    <p
                      className="text-xs text-destructive mt-1"
                      data-ocid="form.class.error_state"
                    >
                      {errors.className}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-foreground">
                    Subject <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(val) =>
                      setFormData((prev) => ({ ...prev, subject: val }))
                    }
                  >
                    <SelectTrigger
                      className={`bg-white border-border focus:border-primary ${
                        errors.subject ? "border-destructive" : ""
                      }`}
                      data-ocid="form.subject.select"
                    >
                      <SelectValue placeholder="Subject chunein..." />
                    </SelectTrigger>
                    <SelectContent>
                      {SUBJECTS.map((subj) => (
                        <SelectItem key={subj} value={subj}>
                          {subj}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.subject && (
                    <p
                      className="text-xs text-destructive mt-1"
                      data-ocid="form.subject.error_state"
                    >
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Mobile */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="mobile"
                    className="text-sm font-medium text-foreground"
                  >
                    Mobile Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        mobile: e.target.value,
                      }))
                    }
                    className={`bg-white border-border focus:border-primary focus:ring-primary/20 ${
                      errors.mobile ? "border-destructive" : ""
                    }`}
                    data-ocid="form.mobile.input"
                    autoComplete="tel"
                    maxLength={10}
                  />
                  {errors.mobile && (
                    <p
                      className="text-xs text-destructive mt-1"
                      data-ocid="form.mobile.error_state"
                    >
                      {errors.mobile}
                    </p>
                  )}
                </div>

                {/* Parent Name */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="parentName"
                    className="text-sm font-medium text-foreground"
                  >
                    Parent / Guardian ka Naam
                  </Label>
                  <Input
                    id="parentName"
                    type="text"
                    placeholder="Jaise: Rajesh Kumar (optional)"
                    value={formData.parentName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        parentName: e.target.value,
                      }))
                    }
                    className="bg-white border-border focus:border-primary focus:ring-primary/20"
                    data-ocid="form.parent_name.input"
                    autoComplete="name"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:opacity-90 font-semibold text-base py-3 shadow-blue-medium"
                    data-ocid="form.submit_button"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Register Ho Raha Hai...
                      </>
                    ) : (
                      "Register Karein →"
                    )}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground mt-3">
                    Aapki jaankari safe hai. Sirf Sonu Sir ko share ki jaayegi.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
