import { GraduationCap } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="border-t border-border bg-secondary/40 py-10 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <img
              src="/assets/uploads/Screenshot_20260310-195245-1.jpg"
              alt="Sonu Sir Class"
              className="w-8 h-8 rounded-full object-cover border border-border"
            />
            <div>
              <span className="font-display font-bold text-foreground">
                Sonu Sir Class
              </span>
              <p className="text-xs text-muted-foreground leading-none">
                Quality Education
              </p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {[
              { label: "Home", href: "#home" },
              { label: "Subjects", href: "#subjects" },
              { label: "PDFs", href: "#pdfs" },
              { label: "Features", href: "#features" },
              { label: "Admission", href: "#register" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#admin"
              className="hover:text-foreground transition-colors opacity-30 hover:opacity-60 text-xs"
              data-ocid="nav.link"
            >
              Admin
            </a>
          </nav>

          {/* Attribution */}
          <p className="text-center text-sm text-muted-foreground">
            © {year}. Built with <span className="text-red-500">♥</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          Sonu Sir Class — Ghar Baithe Padho, Safalta Pao. Class 1–12 ke liye
          best coaching center. Bihar, India.
        </div>
      </div>
    </footer>
  );
}
