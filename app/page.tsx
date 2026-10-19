import FestiveIntro from "@/components/FestiveIntro";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FestivalCountdown from "@/components/FestivalCountdown";
import BlessingsSection from "@/components/BlessingsSection";
import NavdurgaSection from "@/components/NavdurgaSection";
import DiyaExperience from "@/components/DiyaExperience";
import AartiExperience from "@/components/AartiExperience";
import TraditionsSection from "@/components/TraditionsSection";
import GreetingGenerator from "@/components/GreetingGenerator";
import GreetingGallery from "@/components/GreetingGallery";
import ImageGallery from "@/components/ImageGallery";
import ShareSection from "@/components/ShareSection";
import ClosingBlessing from "@/components/ClosingBlessing";
import Footer from "@/components/Footer";
import PetalBackground from "@/components/PetalBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-maroon-deep text-parchment overflow-x-hidden selection:bg-vermilion selection:text-parchment">
      {/* Festive Intro (Section A) */}
      <FestiveIntro />

      {/* Gentle Floating Marigold Petals */}
      <PetalBackground />

      {/* Sticky Navigation (Section B) */}
      <Navbar />

      {/* Hero: The Heart of the Website (Section C & Section 4) */}
      <HeroSection />

      {/* Festival Countdown (Section I) */}
      <FestivalCountdown />

      {/* Festive Blessings on Warm Parchment (Section D) */}
      <BlessingsSection />

      {/* Interactive Nine Forms of Maa Durga (Section E) */}
      <NavdurgaSection />

      {/* Digital Diya Experience (Section F) */}
      <DiyaExperience />

      {/* Digital Aarti Experience (Section G) */}
      <AartiExperience />

      {/* Durga Puja Traditions (Section H) */}
      <TraditionsSection />

      {/* Personalized Hindi Greeting Generator (Section J) */}
      <GreetingGenerator />

      {/* Greeting Gallery of 6 Distinct Styles (Section K) */}
      <GreetingGallery />

      {/* Festive Visual Gallery with Accessible Lightbox (Section L) */}
      <ImageGallery />

      {/* Share the Festive Spirit (Section M) */}
      <ShareSection />

      {/* Closing Blessing (Section N) */}
      <ClosingBlessing />

      {/* Footer (Section O) */}
      <Footer />
    </main>
  );
}
