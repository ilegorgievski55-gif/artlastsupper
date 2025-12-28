import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export const ImageCarousel = ({
  images,
  autoPlay = true,
  interval = 5000,
  className,
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, isPaused, goToNext]);

  return (
    <div 
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Images container */}
      <div 
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 aspect-[4/3] relative"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            {/* Vintage overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
            
            {/* Caption */}
            {image.caption && (
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-body text-sm text-foreground/80 italic">
                  {image.caption}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-background/50 hover:bg-background/70 rounded-full transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-background/50 hover:bg-background/70 rounded-full transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex 
                ? "bg-primary w-6" 
                : "bg-foreground/30 hover:bg-foreground/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;