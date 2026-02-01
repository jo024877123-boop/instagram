import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogoSection } from "@/components/sections/LogoSection";
import { GrowthSection } from "@/components/sections/GrowthSection";
import { USPSection } from "@/components/sections/USPSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { ReviewCarousel } from "@/components/sections/ReviewCarousel";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactFooter } from "@/components/sections/ContactFooter";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LogoSection />
        <GrowthSection />
        <USPSection />
        <ProcessSection />
        <ResultsSection />
        <ReviewCarousel />
        <PricingSection />
        <FAQSection />
      </main>
      <ContactFooter />
    </>
  );
}
