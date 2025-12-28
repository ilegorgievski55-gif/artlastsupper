import { cn } from '@/lib/utils';

export const FloatingArtwork = () => {
  return (
    <section className="relative -mt-[33vh] z-20">
      {/* The artwork positioned so 1/3 is above fold */}
      <div className="relative flex justify-center">
        {/* Warm ambient glow behind */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-[3/1] blur-[120px] opacity-40"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(30 60% 20% / 0.9) 0%, transparent 70%)',
          }}
        />
        
        {/* Artist name overlay */}
        <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 z-20 text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary/60 mb-1">
            Master Craftsman
          </p>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl text-cream-light">
            Stojmir Veselinov
          </h2>
        </div>
        
        {/* The artwork */}
        <img
          src="/images/artwork/last-supper-cutout.png"
          alt="The Last Supper - Hand-carved wooden relief by Stojmir Veselinov"
          className="relative z-10 w-full max-w-6xl h-auto drop-shadow-[0_40px_100px_rgba(0,0,0,0.95)] px-4"
        />
      </div>
      
      {/* Dark fade into next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))',
        }}
      />
    </section>
  );
};

export default FloatingArtwork;
