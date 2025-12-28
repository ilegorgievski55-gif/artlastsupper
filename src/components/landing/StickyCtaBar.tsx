import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface StickyCtaBarProps {
  targetId: string;
}

export const StickyCtaBar = ({ targetId }: StickyCtaBarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 600px
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 bg-wood-medium/95 backdrop-blur-md border-t border-border py-3 px-4 transition-transform duration-500",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="container mx-auto flex items-center justify-between max-w-6xl">
        <div className="hidden sm:block">
          <p className="font-display text-lg text-foreground">The Last Supper</p>
          <p className="font-body text-sm text-muted-foreground">One-of-a-kind masterpiece</p>
        </div>
        
        <Button
          onClick={scrollToForm}
          className="btn-gold animate-pulse-glow ml-auto"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Enquire Now
        </Button>
      </div>
    </div>
  );
};

export default StickyCtaBar;