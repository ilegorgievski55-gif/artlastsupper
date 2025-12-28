import ScrollReveal from './ScrollReveal';
import ImageCarousel from './ImageCarousel';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export const ArtistSection = () => {
  // Placeholder artist photos - vintage B&W style
  const artistPhotos = [
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      alt: 'Stojmir Veselinov at work in his studio',
      caption: 'The master sculptor in his Štip workshop, circa 1980',
    },
    {
      src: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80',
      alt: 'Exhibition opening',
      caption: 'Solo exhibition at Skopje National Gallery, 1982',
    },
    {
      src: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80',
      alt: 'Artist with sculpture',
      caption: 'Presenting award-winning piece at Kumanovo, 1985',
    },
    {
      src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
      alt: 'Workshop tools',
      caption: 'Traditional hand tools passed through generations',
    },
    {
      src: 'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?w=800&q=80',
      alt: 'Crowd at exhibition',
      caption: 'Visitors admiring works at group exhibition, Belgrade 1978',
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="artist" className="relative py-24 md:py-32 bg-wood-medium wood-texture">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <div className="section-divider mb-8" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Stojmir Veselinov
          </h2>
          <p className="font-display text-xl md:text-2xl text-primary italic">
            From Factory Designer to Self-Taught Wood Master
          </p>
        </ScrollReveal>

        {/* Bio content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text content */}
          <ScrollReveal delay={200}>
            <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
              <p>
                Born in 1950 in the historic city of <span className="text-foreground">Štip, Macedonia</span>, Stojmir Veselinov lived a life defined by dual devotion—his daily work as a designer at the renowned "Makedonka" textile factory, and his lifelong passion for sculpture in wood, stone, and cement.
              </p>
              <p>
                Entirely <span className="text-foreground">self-taught</span>, Veselinov developed his extraordinary technique through decades of solitary practice, studying the old masters while forging his own distinctive style. His work earned recognition throughout Yugoslavia, with solo exhibitions in <span className="text-foreground">Skopje, Štip, and Kumanovo</span>, and participation in prestigious group shows across the federation.
              </p>
              <p>
                Critics have long praised his ability to infuse wood with profound emotional depth—his human figures seem to breathe with symbolic meaning, each chisel stroke carrying the weight of prayer. 
                <span className="text-primary italic"> "Every mark I make is a conversation with the material,"</span> he once shared. <span className="text-primary italic">"The wood tells me where it wants to go."</span>
              </p>
              <p>
                In 1985, his work received the coveted <span className="text-foreground">Titova Mitrovica Award</span> for artistic excellence—a testament to his standing among Yugoslavia's finest sculptors. Though humble about his achievements, his legacy speaks through every piece he created.
              </p>
            </div>
          </ScrollReveal>

          {/* Photo carousel */}
          <ScrollReveal delay={400}>
            <ImageCarousel
              images={artistPhotos}
              className="rounded-sm overflow-hidden shadow-[0_20px_50px_-15px_hsl(0_0%_0%_/_0.5)]"
            />
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal delay={600} className="text-center">
          <Button
            onClick={() => scrollToSection('other-works')}
            className="btn-outline-gold"
          >
            View His Masterworks
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ArtistSection;