import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  className?: string;
}

export const ContactForm = ({ className }: ContactFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Enquiry Received",
      description: "Thank you for your interest. We will contact you within 24 hours.",
    });

    // Reset form after showing success
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitted(false);
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <div className={cn("text-center py-16", className)}>
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6 animate-scale-in">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 animate-fade-in">
          Thank You for Your Enquiry
        </h3>
        <p className="font-body text-muted-foreground max-w-md mx-auto animate-fade-in animation-delay-200">
          Your message has been received. A member of our team will contact you within 24 hours to discuss this extraordinary piece.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground font-body">
            Full Name <span className="text-primary">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="bg-muted border-border focus:border-primary focus:ring-primary/30 text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground font-body">
            Email Address <span className="text-primary">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="bg-muted border-border focus:border-primary focus:ring-primary/30 text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-foreground font-body">
          Phone Number
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 000-0000"
          className="bg-muted border-border focus:border-primary focus:ring-primary/30 text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground font-body">
          Your Message <span className="text-primary">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Share your interest in The Last Supper sculpture, any questions about provenance, or request a private viewing..."
          className="bg-muted border-border focus:border-primary focus:ring-primary/30 text-foreground placeholder:text-muted-foreground resize-none"
        />
      </div>

      {/* Collector note */}
      <p className="text-sm text-muted-foreground font-body italic">
        Serious collectors only. All enquiries are handled with discretion and confidentiality.
      </p>

      {/* Submit button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto btn-gold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <span className="animate-pulse">Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Submit Enquiry
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;