import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

export const FloatingArtwork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-0 overflow-hidden"
    >
      {/* Dark cinematic backdrop */}
      <div className="bg-[#0a0806] py-20 md:py-32">
        {/* Spotlight effect from above */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 0%, hsl(43 50% 40% / 0.15) 0%, transparent 60%)',
          }}
        />
        
        {/* Subtle grain texture overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
          }}
        />

        <div className="container mx-auto px-4">
          {/* Title above artwork */}
          <div 
            className={cn(
              "text-center mb-12 transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            )}
          >
            <p className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-primary/70 mb-3">
              The Masterpiece
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-cream-light italic">
              "The Last Supper"
            </h2>
          </div>

          {/* Artwork showcase */}
          <div 
            className={cn(
              "relative flex justify-center transition-all duration-1000 delay-300",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            )}
          >
            {/* Warm ambient glow behind */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-[3/1] blur-[100px] opacity-50"
              style={{
                background: 'radial-gradient(ellipse at center, hsl(30 60% 25% / 0.8) 0%, transparent 70%)',
              }}
            />
            
            {/* The artwork */}
            <img
              src="/images/artwork/last-supper-cutout.png"
              alt="The Last Supper - Hand-carved wooden relief by Stojmir Veselinov"
              className="relative z-10 w-full max-w-5xl h-auto drop-shadow-[0_30px_80px_rgba(0,0,0,0.9)]"
            />
          </div>

          {/* Details below */}
          <div 
            className={cn(
              "text-center mt-12 md:mt-16 transition-all duration-1000 delay-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="flex items-center justify-center gap-6 text-cream-light/60 font-body text-sm">
              <span>Hand-carved wooden relief</span>
              <span className="w-1 h-1 rounded-full bg-primary/50" />
              <span>Completed 1998</span>
              <span className="w-1 h-1 rounded-full bg-primary/50" />
              <span>Štip, Macedonia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingArtwork;
