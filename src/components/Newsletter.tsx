
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { toast } from "sonner";
import { Mail, Send, Check } from "lucide-react";
import { ScrollReveal } from "./animation/ScrollReveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      toast.success("Thank you for subscribing to our newsletter!");
      
      // Reset form after a while
      setTimeout(() => {
        setEmail("");
        setIsSubscribed(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section className="py-16 bg-coffee-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="relative p-8 md:p-12 rounded-2xl overflow-hidden bg-gradient-to-br from-coffee-medium to-coffee-dark">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              
              <div className="absolute -top-24 -right-24 w-48 h-48 rotate-12 opacity-10">
                <Mail className="w-full h-full" strokeWidth={0.5} />
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                  <div className="md:w-1/2">
                    <Badge className="mb-4 bg-white/10 hover:bg-white/20 text-white border-0">
                      Stay Updated
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Newsletter</h2>
                    <p className="text-white/80 mb-6">
                      Subscribe to receive updates on new coffee arrivals, brewing tips, 
                      and exclusive offers. Be the first to know about our special events and promotions.
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-full bg-white/10 flex items-center justify-center">
                        <Send className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">No spam, just coffee.</p>
                        <p className="text-sm text-white/70">We send 1-2 emails per month.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="bg-white/10 backdrop-blur-sm p-1.5 rounded-xl">
                        <div className="flex">
                          <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="border-0 bg-transparent text-white placeholder:text-white/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                            disabled={isSubmitting || isSubscribed}
                          />
                          <Button 
                            type="submit" 
                            className={`rounded-lg px-6 shrink-0 ${
                              isSubscribed 
                                ? "bg-green-600 hover:bg-green-700" 
                                : "bg-white text-coffee-dark hover:bg-white/90"
                            }`}
                            disabled={isSubmitting || isSubscribed}
                          >
                            {isSubmitting ? (
                              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            ) : isSubscribed ? (
                              <>
                                <Check className="mr-2 h-4 w-4" />
                                Subscribed
                              </>
                            ) : (
                              "Subscribe"
                            )}
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-white/60">
                        By subscribing, you agree to our Privacy Policy and consent to receive updates
                        from Preciso.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
