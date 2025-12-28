import ScrollReveal from './ScrollReveal';
import Gallery from './Gallery';

export const OtherWorksSection = () => {
  const artworks = [
    {
      src: '/images/legacy/legacy-1.jpeg',
      alt: 'Wood sculpture by Stojmir Veselinov',
      title: 'Legacy Collection',
      caption: 'Wood carving',
    },
    {
      src: '/images/legacy/legacy-2.jpeg',
      alt: 'Wood sculpture by Stojmir Veselinov',
      title: 'Legacy Collection',
      caption: 'Wood carving',
    },
    {
      src: '/images/legacy/legacy-3.jpeg',
      alt: 'Wood sculpture by Stojmir Veselinov',
      title: 'Legacy Collection',
      caption: 'Wood carving',
    },
    {
      src: '/images/legacy/legacy-4.jpeg',
      alt: 'Wood sculpture by Stojmir Veselinov',
      title: 'Legacy Collection',
      caption: 'Wood carving',
    },
    {
      src: '/images/legacy/legacy-5.jpeg',
      alt: 'Wood sculpture by Stojmir Veselinov',
      title: 'Legacy Collection',
      caption: 'Wood carving',
    },
    {
      src: '/images/legacy/legacy-6.jpeg',
      alt: 'Wood sculpture by Stojmir Veselinov',
      title: 'Legacy Collection',
      caption: 'Wood carving',
    },
    {
      src: '/images/legacy/legacy-7.jpeg',
      alt: 'Wood sculpture by Stojmir Veselinov',
      title: 'Legacy Collection',
      caption: 'Wood carving',
    },
    {
      src: '/images/legacy/sculpture-book.jpeg',
      alt: 'Sculpture book featuring Veselinov works',
      title: 'Publication',
      caption: 'Featured in art book',
    },
    {
      src: '/images/legacy/book-first-pages.jpeg',
      alt: 'Book pages featuring Veselinov',
      title: 'Publication',
      caption: 'Art book pages',
    },
    {
      src: '/images/legacy/newspaper.jpeg',
      alt: 'Newspaper article about Veselinov',
      title: 'Press Coverage',
      caption: 'Media recognition',
    },
    {
      src: '/images/legacy/book-description.jpeg',
      alt: 'Book description of Veselinov',
      title: 'Publication',
      caption: 'Book excerpt',
    },
    {
      src: '/images/legacy/visit-card.jpeg',
      alt: 'Artist visit card',
      title: 'Visit Card',
      caption: 'Personal card',
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