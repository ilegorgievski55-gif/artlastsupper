import HeroSection from '@/components/landing/HeroSection';
import FloatingArtwork from '@/components/landing/FloatingArtwork';
import ArtistSection from '@/components/landing/ArtistSection';
import OtherWorksSection from '@/components/landing/OtherWorksSection';
import LastSupperSection from '@/components/landing/LastSupperSection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';
import StickyCtaBar from '@/components/landing/StickyCtaBar';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FloatingArtwork />
      <ArtistSection />
      <OtherWorksSection />
      <LastSupperSection />
      <ContactSection />
      <Footer />
      
      {/* Advanced features */}
      <StickyCtaBar targetId="contact" />
    </main>
  );
};

export default Index;