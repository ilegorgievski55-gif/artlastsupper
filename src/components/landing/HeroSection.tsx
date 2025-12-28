import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronDown, Hammer, Trees, Church, Award } from 'lucide-react';

export const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Show content after 3 seconds of video playing
    const timer = setTimeout(() => setShowContent(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Hammer,
      text: "Hand-carved from solid Macedonian wood, capturing Da Vinci's sacred composition with breathtaking depth.",
    },
    {
      icon: Award,
      text: "Museum-grade detail: Every apostle's expression chiselled with spiritual precision, playing with light and shadow.",
    },
    {
      icon: Trees,
      text: "Timeless investment: Provenance from award-winning sculptor exhibited across Yugoslavia (Skopje, Kumanovo, 1985 Titova Mitrovica award).",
    },
    {
      icon: Church,
      text: "Emotional centerpiece: Commands awe and silence, perfect for private collections, galleries, or sacred spaces.",
    },
  ];

  return (
    <section className="relative min-h-[150vh] overflow-hidden">
      {/* Hero area - above the fold */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Full-screen video background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={(e) => {
            e.currentTarget.pause();
          }}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mov" type="video/mp4" />
        </video>

        {/* Dark overlay that fades in with content */}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background transition-opacity duration-1000",
            showContent ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Wood texture overlay */}
        <div 
          className={cn(
            "absolute inset-0 wood-texture transition-opacity duration-1000",
            showContent ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Content - hidden for first 3 seconds */}
        <div 
          className={cn(
            "relative z-10 container mx-auto px-4 py-20 text-center max-w-5xl transition-all duration-1000",
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Main headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            <span className="text-primary gold-glow">The Last Supper</span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl font-normal">
              Reborn in Wood by Macedonian Master
            </span>
            <br />
            <span className="italic">Stojmir Veselinov</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            For discerning collectors who value rare, handcrafted legacy pieces. This one-of-a-kind relief was carved over years with profound love and devotion—never intended for sale, born from personal faith and Balkan heritage in his Štip workshop.
          </p>

          {/* Feature bullets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 rounded-sm bg-muted/30 backdrop-blur-sm border border-border/50"
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  opacity: showContent ? 1 : 0,
                  transform: showContent ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-body text-sm md:text-base text-foreground/90">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ 
              transitionDelay: '600ms',
              opacity: showContent ? 1 : 0,
              transform: showContent ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
            }}
          >
            <Button
              onClick={() => scrollToSection('contact')}
              className="btn-gold text-lg px-10 py-6"
            >
              Enquire About Ownership
            </Button>
            <Button
              onClick={() => scrollToSection('artist')}
              variant="outline"
              className="btn-outline-gold text-lg px-10 py-6"
            >
              Discover the Story
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className={cn(
            "absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-float transition-opacity duration-500",
            showContent ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: '800ms' }}
        >
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>

      {/* Seamless artwork reveal - integrated into hero scroll */}
      <div className="relative -mt-32 pb-20">
        {/* Gradient fade from hero */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
        
        {/* Artwork container */}
        <div className="relative z-20 container mx-auto px-4">
          <div className="relative max-w-5xl mx-auto">
            {/* Ambient glow behind artwork */}
            <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-radial from-primary/40 via-primary/10 to-transparent" />
            
            {/* The artwork */}
            <img
              src="/images/artwork/last-supper-cutout.png"
              alt="The Last Supper - Hand-carved wooden relief by Stojmir Veselinov"
              className="relative w-full h-auto drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5)) drop-shadow(0 0 100px hsl(var(--primary) / 0.2))'
              }}
            />
            
            {/* Subtle caption */}
            <p className="text-center mt-6 text-muted-foreground/60 text-sm tracking-widest uppercase">
              Completed 1998 · Štip, Macedonia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;