import { Toaster } from "@/components/ui/sonner";
import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import RegistrationForm from "./components/RegistrationForm";
import SubjectsSection from "./components/SubjectsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Toaster position="top-center" />
      <Navbar />
      <main>
        <HeroSection />
        <SubjectsSection />
        <FeaturesSection />
        <RegistrationForm />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
