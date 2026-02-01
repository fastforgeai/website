import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { SecondaryHero } from '@/components/SecondaryHero';
import { CapabilitiesSection } from '@/components/CapabilitiesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ProductSection } from '@/components/ProductSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <SecondaryHero />
        <CapabilitiesSection />
        <TestimonialsSection />
        <ProductSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
