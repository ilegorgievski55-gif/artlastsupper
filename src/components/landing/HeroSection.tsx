import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronDown, Hammer, Trees, Church, Award } from 'lucide-react';

export const HeroSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Trigger reveal animation after component mounts
    const timer = setTimeout(() => setIsRevealed(true), 500);
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden wood-texture">
      {/* Dramatic black-to-spotlight reveal effect */}
      <div 
        className={cn(
          "absolute inset-0 bg-background transition-opacity duration-[3000ms]",
          isRevealed ? "opacity-0" : "opacity-100"
        )}
        style={{ zIndex: 5 }}
      />
      
      {/* Spotlight overlay */}
      <div className="absolute inset-0 spotlight" />
      
      {/* Placeholder for hero image/video - dramatic sculpture reveal */}
      <div 
        className={cn(
          "absolute inset-0 bg-cover bg-center transition-all duration-[3000ms]",
          isRevealed ? "opacity-30 scale-100" : "opacity-0 scale-105"
        )}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=1920&q=80')`,
        }}
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center max-w-5xl">
        {/* Main headline */}
        <h1 
          className={cn(
            "font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-6",
            "opacity-0 transition-all duration-1000",
            isRevealed && "opacity-100 animate-fade-in"
          )}
          style={{ animationDelay: '1s' }}
        >
          <span className="text-primary gold-glow">The Last Supper</span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl font-normal">
            Reborn in Wood by Macedonian Master
          </span>
          <br />
          <span className="italic">Stojmir Veselinov</span>
        </h1>

        {/* Subheadline */}
        <p 
          className={cn(
            "font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12",
            "opacity-0",
            isRevealed && "opacity-100 animate-fade-in"
          )}
          style={{ animationDelay: '1.5s' }}
        >
          For discerning collectors who value rare, handcrafted legacy pieces. This one-of-a-kind relief was carved over years with profound love and devotion—never intended for sale, born from personal faith and Balkan heritage in his Štip workshop.
        </p>

        {/* Feature bullets */}
        <div 
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left",
            "opacity-0",
            isRevealed && "opacity-100 animate-fade-in"
          )}
          style={{ animationDelay: '2s' }}
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-4 rounded-sm bg-muted/30 backdrop-blur-sm border border-border/50"
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
          className={cn(
            "flex flex-col sm:flex-row gap-4 justify-center",
            "opacity-0",
            isRevealed && "opacity-100 animate-fade-in"
          )}
          style={{ animationDelay: '2.5s' }}
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
          "absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-float",
          "opacity-0",
          isRevealed && "opacity-100"
        )}
        style={{ animationDelay: '3s' }}
      >
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default HeroSection;