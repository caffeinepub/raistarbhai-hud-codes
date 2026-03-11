import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import AdminPanel from "./components/AdminPanel";
import ContactSection from "./components/ContactSection";
import CoursePaymentSection from "./components/CoursePaymentSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import RegistrationForm from "./components/RegistrationForm";
import SubjectPDFSection from "./components/SubjectPDFSection";
import SubjectsSection from "./components/SubjectsSection";

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      setIsAdmin(window.location.hash === "#admin");
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  if (isAdmin) {
    return (
      <div className="min-h-screen bg-background font-body">
        <Toaster position="top-center" />
        <AdminPanel />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-body">
      <Toaster position="top-center" />
      <Navbar />
      <main>
        <HeroSection />
        <SubjectsSection />
        <SubjectPDFSection />
        <FeaturesSection />
        <CoursePaymentSection />
        <RegistrationForm />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
