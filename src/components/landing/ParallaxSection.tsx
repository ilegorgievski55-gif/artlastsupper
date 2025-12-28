import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
  overlayOpacity?: number;
  speed?: number; // 0.1 to 0.5 recommended
  id?: string;
}

export const ParallaxSection = ({
  children,
  className,
  backgroundImage,
  overlayOpacity = 0.7,
  speed = 0.3,
  id,
}: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const sectionTop = rect.top + scrolled;
      const relativeScroll = scrolled - sectionTop + window.innerHeight;
      
      if (relativeScroll > 0 && rect.top < window.innerHeight) {
        setOffsetY(relativeScroll * speed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn("relative overflow-hidden", className)}
    >
      {/* Parallax background */}
      {backgroundImage && (
        <div
          className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: `translateY(${offsetY}px)`,
          }}
        />
      )}
      
      {/* Dark overlay */}
      <div 
        className="absolute inset-0 bg-background"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;