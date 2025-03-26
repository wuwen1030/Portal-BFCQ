import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";
import CareersSection from "../components/CareersSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
