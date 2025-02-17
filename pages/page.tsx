// app/page.tsx
import HeroSection from "../app/components/HeroSection";
import BenefitsSection from "../app/components/BenefitsSection";
import AboutSection from "../app/components/AboutSection";
import CurriculumSection from "../app/components/CurriculumSection";
import PricingSection from "../app/components/PricingSection";
import Footer from "../app/components/Footer";
import TestimonialsSection from "../app/components/TestimonialsSection";
import Certificate from "../app/components/Certificate";
import PartnersCarousel from "../app/components/PartnersCarousel";
import EbookViewer from "../app/components/EbookViewer";
import SeoSection from "../app/components/SeoSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <PartnersCarousel />
      <AboutSection />
      <CurriculumSection />
      <PricingSection />
      <EbookViewer />
      <TestimonialsSection />
      <Certificate/>
      
      <SeoSection />
      <Footer />
    </>
  );
}
