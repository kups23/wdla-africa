import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import SignatureComponents from "@/components/SignatureComponents";
import WhoShouldAttend from "@/components/WhoShouldAttend";
import PartnershipSection from "@/components/PartnershipSection";
import AgendaSection from "@/components/AgendaSection";
import SpeakersSection from "@/components/SpeakersSection";
import SolutionsSection from "@/components/SolutionsSection";
import VenueSection from "@/components/VenueSection";
import InsightsSection from "@/components/InsightsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        {/* 1. Hero with floating header navigation & scrolling logos banner */}
        <Hero />

        {/* 2. Why Workforce DealLab Africa */}
        <WhySection />

        {/* 3. Three Signature Components (Cards 01, 02, 03) */}
        <SignatureComponents />

        {/* 4. Who Should Attend the Summit */}
        <WhoShouldAttend />

        {/* 5. Built Through Partnership (2 rows of 5 partner logos) */}
        <PartnershipSection />

        {/* 6. Three Days. One Shared Agenda */}
        <AgendaSection />

        {/* 7. Meet Your Special Speakers (with back.png blur overlay & 6 cards) */}
        <SpeakersSection />

        {/* 8. Discover the Solutions Shaping Africa's Education-to-Employment */}
        <SolutionsSection />

        {/* 9. Glee Hotels Nairobi, Kenya (with 2x2 grid of hotel images) */}
        <VenueSection />

        {/* 10. Ideas For What Comes Next */}
        <InsightsSection />

        {/* 11. Be Part Of The Conversation CTA */}
        <CtaSection />
      </main>

      {/* 12. Footer with logoupdate.png */}
      <Footer />
    </div>
  );
}
