
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/home/HeroSection';
import WhatIsHunter from '../components/home/WhatIsHunter';
import ProcessSection from '../components/home/ProcessSection';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';
import BenefitsSection from '../components/home/BenefitsSection';
import PricingSection from '../components/home/PricingSection';
import FAQSection from '../components/home/FAQSection';
import CTASection from '../components/home/CTASection';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsHunter />
        <ProcessSection />
        <TestimonialsCarousel />
        <BenefitsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
