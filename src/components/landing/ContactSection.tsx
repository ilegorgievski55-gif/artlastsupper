import ScrollReveal from './ScrollReveal';
import ContactForm from './ContactForm';
import { MapPin, Mail, Shield } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-background wood-texture">
      {/* Spotlight effect */}
      <div className="absolute inset-0 spotlight opacity-50" />

      <div className="relative container mx-auto px-4 max-w-5xl">
        {/* Urgency header */}
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-body text-sm mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Only One Exists
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Own a Masterpiece of Faith & Craft
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            This singular work awaits its guardian. Enquire today before this extraordinary piece finds its forever home.
          </p>
        </ScrollReveal>

        {/* Form and info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <ScrollReveal delay={200} className="lg:col-span-3">
            <div className="p-6 md:p-8 bg-wood-medium rounded-sm border border-border/50">
              <h3 className="font-display text-2xl text-foreground mb-6">
                Request Private Viewing
              </h3>
              <ContactForm />
            </div>
          </ScrollReveal>

          {/* Info sidebar */}
          <ScrollReveal delay={400} className="lg:col-span-2">
            <div className="space-y-6">
              {/* Provenance */}
              <div className="p-6 bg-muted/30 rounded-sm border border-border/50">
                <h4 className="font-display text-lg text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Provenance & Authenticity
                </h4>
                <ul className="space-y-3 font-body text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    Direct from artist's family collection
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    Complete documentation available
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    Certificate of authenticity included
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    Exhibition history records
                  </li>
                </ul>
              </div>

              {/* Origin */}
              <div className="p-6 bg-muted/30 rounded-sm border border-border/50">
                <h4 className="font-display text-lg text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Origin
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  Created in Štip, North Macedonia<br />
                  Part of the artist's personal collection for decades
                </p>
              </div>

              {/* Contact note */}
              <div className="p-6 bg-primary/5 rounded-sm border border-primary/20">
                <h4 className="font-display text-lg text-foreground mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Discrete Handling
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  All enquiries are handled with utmost discretion. Private viewings can be arranged for serious collectors. International shipping and installation services available.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;