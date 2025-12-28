import { useState } from 'react';
import { cn } from '@/lib/utils';
import Lightbox from './Lightbox';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  title?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  className?: string;
  variant?: 'masonry' | 'grid';
}

export const Gallery = ({ images, columns = 4, className, variant = 'grid' }: GalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const columnClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  return (
    <>
      <div 
        className={cn(
          "grid gap-4",
          columnClasses[columns],
          className
        )}
      >
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className={cn(
              "group relative overflow-hidden rounded-sm cursor-pointer",
              "bg-muted aspect-[4/3]",
              "transition-all duration-500 ease-out",
              "hover:shadow-[0_0_30px_hsl(43_70%_53%_/_0.2)]",
              variant === 'masonry' && index % 3 === 0 && "sm:row-span-2 sm:aspect-auto"
            )}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                {image.title && (
                  <h4 className="font-display text-lg text-foreground mb-1">{image.title}</h4>
                )}
                {image.caption && (
                  <p className="font-body text-sm text-muted-foreground">{image.caption}</p>
                )}
              </div>
            </div>

            {/* Zoom icon */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        images={images}
        initialIndex={selectedIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
};

export default Gallery;