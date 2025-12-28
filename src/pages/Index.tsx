import HeroSection from '@/components/landing/HeroSection';
import ArtistSection from '@/components/landing/ArtistSection';
import OtherWorksSection from '@/components/landing/OtherWorksSection';
import LastSupperSection from '@/components/landing/LastSupperSection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';
import StickyCtaBar from '@/components/landing/StickyCtaBar';
import ExitIntentPopup from '@/components/landing/ExitIntentPopup';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ArtistSection />
      <OtherWorksSection />
      <LastSupperSection />
      <ContactSection />
      <Footer />
      
      {/* Advanced features */}
      <StickyCtaBar targetId="contact" />
      <ExitIntentPopup />
    </main>
  );
};

export default Index;