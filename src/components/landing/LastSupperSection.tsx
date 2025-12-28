import ScrollReveal from './ScrollReveal';
import Gallery from './Gallery';
import { Eye, Hammer, Sparkles, Quote } from 'lucide-react';

export const LastSupperSection = () => {
  // Main artwork gallery images
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=1200&q=80',
      alt: 'The Last Supper full view',
      caption: 'Full view of the complete relief showing all twelve apostles and Christ',
    },
    {
      src: 'https://images.unsplash.com/photo-1577720580479-7d839d829c73?w=1200&q=80',
      alt: 'Detail of Christ figure',
      caption: 'Detail: The central figure of Christ, radiating divine presence',
    },
    {
      src: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=1200&q=80',
      alt: 'Detail of apostles left side',
      caption: 'Detail: Apostles on the left, each face individually carved with distinct emotion',
    },
    {
      src: 'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?w=1200&q=80',
      alt: 'Detail of apostles right side',
      caption: 'Detail: Apostles on the right, showing the depth of the relief carving',
    },
    {
      src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80',
      alt: 'Wood grain detail',
      caption: 'The natural wood grain enhances the sacred atmosphere of the piece',
    },
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
      alt: 'Artist with the sculpture',
      caption: 'Stojmir Veselinov with his masterpiece in the family collection',
    },
  ];

  const creationSteps = [
    {
      icon: Eye,
      title: 'Vision',
      description: 'Inspired by the sacred story of Christ\'s final meal, Stojmir sketched the composition in his Štip workshop, studying Da Vinci\'s masterpiece while envisioning his own interpretation in wood.',
    },
    {
      icon: Hammer,
      title: 'Craft',
      description: 'Over many months, each apostle took form under patient chisel strokes. Every face emerged with distinct personality—doubt, devotion, betrayal—all captured in the living grain of Macedonian wood.',
    },
    {
      icon: Sparkles,
      title: 'Revelation',
      description: 'The finished relief was polished to embrace light itself—shadows dancing across the sacred scene as if the moment were frozen in amber, waiting to speak across centuries.',
    },
  ];

  return (
    <section id="last-supper" className="relative py-24 md:py-32 bg-wood-medium wood-texture">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <div className="section-divider mb-8" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            <span className="text-primary">The Last Supper</span>
          </h2>
          <p className="font-display text-xl md:text-2xl text-muted-foreground italic">
            Pinnacle of Devotion
          </p>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={200} className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
              A one-of-a-kind hand-carved wooden relief reinterpreting Leonardo da Vinci's immortal composition through the soul of a Macedonian master. This extraordinary piece was created not for sale, but from the deepest wells of faith and artistic devotion.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-body">
              <span className="px-4 py-2 bg-muted/50 rounded-sm">Medium: Solid Macedonian Wood</span>
              <span className="px-4 py-2 bg-muted/50 rounded-sm">Style: Relief Sculpture</span>
              <span className="px-4 py-2 bg-muted/50 rounded-sm">Condition: Museum-Grade</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Creation Process Timeline */}
        <ScrollReveal delay={300} className="mb-20">
          <h3 className="font-display text-2xl text-foreground text-center mb-10">
            The Creation Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {creationSteps.map((step, index) => (
              <div 
                key={index}
                className="relative p-6 bg-muted/30 rounded-sm border border-border/50 text-center"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center font-display text-primary-foreground font-bold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mt-4 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h4 className="font-display text-xl text-foreground mb-3">{step.title}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Family Message */}
        <ScrollReveal delay={400} className="mb-16">
          <div className="relative max-w-3xl mx-auto p-8 md:p-12 bg-background/50 rounded-sm border border-primary/30">
            <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/30" />
            <Quote className="absolute bottom-4 right-4 w-8 h-8 text-primary/30 rotate-180" />
            
            <blockquote className="font-display text-xl md:text-2xl text-foreground italic text-center mb-6 leading-relaxed">
              "This piece carries my father's prayers—crafted with love, never meant for market. We seek a collector who will feel its soul, who will understand that this is not merely art, but a lifetime of devotion made tangible."
            </blockquote>
            <cite className="block text-center font-body text-muted-foreground">
              — The Family of Stojmir Veselinov
            </cite>
          </div>
        </ScrollReveal>

        {/* Main Gallery */}
        <ScrollReveal delay={500}>
          <h3 className="font-display text-2xl text-foreground text-center mb-10">
            Gallery
          </h3>
          <Gallery
            images={galleryImages}
            columns={3}
            variant="grid"
          />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LastSupperSection;