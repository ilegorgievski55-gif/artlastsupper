import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Trigger when mouse moves to top of viewport
    if (e.clientY <= 10 && !hasShown) {
      setIsVisible(true);
      setHasShown(true);
    }
  }, [hasShown]);

  useEffect(() => {
    // Check if already shown in this session
    const shown = sessionStorage.getItem('exitPopupShown');
    if (shown) {
      setHasShown(true);
      return;
    }

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [handleMouseLeave]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('exitPopupShown', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    toast({
      title: "Thank you!",
      description: "You'll receive exclusive updates about this masterpiece.",
    });
    
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div 
        className={cn(
          "relative bg-wood-medium border border-border rounded-sm max-w-lg w-full p-8",
          "shadow-[0_0_60px_hsl(43_70%_53%_/_0.2)]",
          "animate-scale-in"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Content */}
        <h3 className="font-display text-2xl md:text-3xl text-foreground text-center mb-4">
          Wait — Don't Miss This
        </h3>
        <p className="font-body text-muted-foreground text-center mb-6">
          Be the first to know about exclusive opportunities to acquire rare works by Stojmir Veselinov. 
          Enter your email for priority access.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="bg-muted border-border focus:border-primary focus:ring-primary/30 text-foreground placeholder:text-muted-foreground"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-gold"
          >
            {isSubmitting ? 'Subscribing...' : 'Get Priority Access'}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-4">
          No spam, unsubscribe anytime. Your privacy is respected.
        </p>
      </div>
    </div>
  );
};

export default ExitIntentPopup;