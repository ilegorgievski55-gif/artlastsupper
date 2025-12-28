import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

export const FloatingArtwork = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(inView);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax effect - artwork moves slower than scroll
  const parallaxOffset = scrollY * 0.05;

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-background via-wood-medium to-background"
    >
      {/* Ambient glow behind artwork */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, hsl(43 70% 53% / 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Floating artwork container */}
      <div 
        className={cn(
          "relative container mx-auto px-4 flex justify-center transition-all duration-700",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
        style={{
          transform: `translateY(${-parallaxOffset}px)`,
        }}
      >
        <div className="relative group cursor-pointer">
          {/* Glow effect */}
          <div 
            className="absolute inset-0 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(ellipse at center, hsl(43 70% 53% / 0.5) 0%, transparent 70%)',
              transform: 'scale(1.2)',
            }}
          />
          
          {/* Shadow beneath artwork */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 blur-2xl bg-black/50 rounded-full"
            style={{
              transform: `translateX(-50%) translateY(${parallaxOffset * 0.5}px)`,
            }}
          />

          {/* The cutout artwork */}
          <img
            src="/images/artwork/last-supper-cutout.png"
            alt="The Last Supper - Hand-carved wooden relief by Stojmir Veselinov"
            className={cn(
              "relative z-10 w-full max-w-4xl h-auto",
              "drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]",
              "transition-transform duration-500 ease-out",
              "group-hover:scale-[1.02] group-hover:drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
            )}
          />

          {/* Subtle golden rim light effect */}
          <div 
            className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(180deg, hsl(43 70% 53% / 0.1) 0%, transparent 20%, transparent 80%, hsl(43 70% 53% / 0.05) 100%)',
            }}
          />
        </div>
      </div>

      {/* Caption */}
      <div 
        className={cn(
          "text-center mt-8 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <p className="font-display text-lg md:text-xl text-primary italic">
          "The Last Supper"
        </p>
        <p className="font-body text-sm text-muted-foreground mt-2">
          Hand-carved wooden relief • Completed 1998
        </p>
      </div>
    </section>
  );
};

export default FloatingArtwork;
