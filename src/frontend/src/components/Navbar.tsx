import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Subjects", href: "#subjects" },
  { label: "PDFs", href: "#pdfs" },
  { label: "Features", href: "#features" },
  { label: "Admission", href: "#register" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-xs">
      <div className="container max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group"
          data-ocid="nav.link"
        >
          <img
            src="/assets/uploads/Screenshot_20260310-195245-1.jpg"
            alt="Sonu Sir Class Logo"
            className="w-10 h-10 rounded-full object-cover shadow-sm border border-border"
          />
          <div>
            <span className="font-display font-bold text-lg text-foreground leading-none block">
              Sonu Sir Class
            </span>
            <span className="text-xs text-muted-foreground leading-none">
              Quality Education
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <a href="#register">
            <Button
              size="sm"
              className="ml-2 bg-primary text-primary-foreground hover:opacity-90 shadow-blue-soft"
              data-ocid="nav.primary_button"
            >
              Register Now
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <Button
              className="mt-2 w-full bg-primary text-primary-foreground hover:opacity-90"
              data-ocid="nav.primary_button"
              onClick={() => {
                setMenuOpen(false);
                window.location.hash = "#register";
              }}
            >
              Abhi Register Karein
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
