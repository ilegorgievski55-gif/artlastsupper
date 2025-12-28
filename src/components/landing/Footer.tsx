import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-wood-dark border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main footer content */}
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl text-foreground mb-2">
            Stojmir Veselinov
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            Master Wood Sculptor • Štip, Macedonia • 1950 – Present
          </p>
        </div>

        <Separator className="bg-border/50 mb-8" />

        {/* Heritage note */}
        <div className="text-center mb-8">
          <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto italic">
            This collection represents a lifetime of dedication to the ancient art of wood sculpture, 
            carrying forward the rich artistic traditions of the Balkan region. 
            Each piece is a testament to Macedonian craftsmanship and spiritual devotion.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-body">
          <p>
            © {currentYear} Veselinov Family Collection. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-primary text-xs uppercase tracking-wider">
              Macedonian Heritage
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;