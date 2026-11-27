import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import SignatureComponents from "@/components/SignatureComponents";
import WhoShouldAttend from "@/components/WhoShouldAttend";
import AgendaSection from "@/components/AgendaSection";
import SpeakersSection from "@/components/SpeakersSection";
import SolutionsSection from "@/components/SolutionsSection";
import PartnershipSection from "@/components/PartnershipSection";
import InsightsSection from "@/components/InsightsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero & Summit Meta Bar */}
        <Hero />

        {/* 3. Why Workforce DealLab Africa */}
        <WhySection />

        {/* 4. Three Signature Components */}
        <SignatureComponents />

        {/* 5. Who Should Attend the Summit */}
        <WhoShouldAttend />

        {/* 6. Three Days. One Shared Agenda */}
        <AgendaSection />

        {/* 7. Meet Your Speakers */}
        <SpeakersSection />

        {/* 8. Discover the Solutions Shaping Africa */}
        <SolutionsSection />

        {/* 9. Built Through Partnership */}
        <PartnershipSection />

        {/* 10. Ideas For What Comes Next */}
        <InsightsSection />

        {/* 11. Be Part Of The Conversation CTA */}
        <CtaSection />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
