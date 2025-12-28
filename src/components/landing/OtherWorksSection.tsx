import ScrollReveal from './ScrollReveal';
import Gallery from './Gallery';

export const OtherWorksSection = () => {
  // Placeholder gallery images representing other sculptures
  const artworks = [
    {
      src: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80',
      alt: 'Mother and Child sculpture',
      title: 'Mother & Child',
      caption: 'Wood, circa 1980',
    },
    {
      src: 'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?w=800&q=80',
      alt: 'Old Man bust sculpture',
      title: 'Old Man Bust',
      caption: 'Wood, 1984',
    },
    {
      src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
      alt: 'Miner figure sculpture',
      title: 'The Miner',
      caption: 'Wood, circa 1982',
    },
    {
      src: 'https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=800&q=80',
      alt: 'Female figure sculpture',
      title: 'Female Figure',
      caption: 'Stone & Wood, 1979',
    },
    {
      src: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80',
      alt: 'Horse relief carving',
      title: 'Horse Relief',
      caption: 'Book Cover Design, circa 1985',
    },
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      alt: 'Priest figure sculpture',
      title: 'The Priest',
      caption: 'Wood, 1987',
    },
    {
      src: 'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=800&q=80',
      alt: 'Exhibition award ceremony',
      title: 'Kumanovo Exhibition',
      caption: 'Award ceremony, 1985',
    },
    {
      src: 'https://images.unsplash.com/photo-1577720580479-7d839d829c73?w=800&q=80',
      alt: 'Worker figure sculpture',
      title: 'The Worker',
      caption: 'Wood, 1983',
    },
  ];

  return (
    <section id="other-works" className="relative py-24 md:py-32 bg-background wood-texture">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <div className="section-divider mb-8" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            A Legacy of Wood Carvings
          </h2>
          <p className="font-display text-xl md:text-2xl text-muted-foreground italic">
            1970s – 1990s
          </p>
        </ScrollReveal>

        {/* Gallery grid */}
        <ScrollReveal delay={200}>
          <Gallery
            images={artworks}
            columns={4}
            variant="grid"
            className="mb-12"
          />
        </ScrollReveal>

        {/* Subtext */}
        <ScrollReveal delay={400} className="text-center">
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Decades of mastery — from intimate busts to powerful figures. Each piece reflects Veselinov's unique ability to breathe life into wood. Now, his pinnacle work awaits its rightful guardian.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default OtherWorksSection;