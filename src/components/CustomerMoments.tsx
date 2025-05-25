
import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Instagram, Facebook } from "lucide-react";
import { ScrollReveal } from "./animation/ScrollReveal";
import { TikTokIcon } from "./icons/TikTokIcon";
import { InstagramGrid } from "./InstagramGrid";

export function CustomerMoments() {
  return (
    <div className="py-16 md:py-24 bg-[var(--coffee-cream)] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[var(--coffee-accent)]/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-[var(--coffee-accent)]/10 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-[var(--coffee-accent)] bg-white text-[var(--coffee-dark)] hover:bg-white/80">Share Your Moments</Badge>
            <h2 className="text-3xl md:text-4xl mb-4">Preciso Customer Moments</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how our customers enjoy their Preciso experience. Tag us on social media with #PrecisoCoffee to be featured!
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          {/* Hashtags at the top */}
          <div className="flex justify-center mb-6">
            <Badge className="bg-black text-white text-sm px-3 py-1 mr-2">#PrecisoCoffee</Badge>
            <Badge className="bg-black text-white text-sm px-3 py-1">#PrecisoMoments</Badge>
          </div>
        </ScrollReveal>

        {/* Instagram Grid Component */}
        <ScrollReveal>
          <InstagramGrid />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-8 text-center">
            {/* Social media buttons - all black */}
            <div className="flex justify-center items-center gap-4 mb-6">
              <Button
                // variant="outline"
                className="bg-black hover:bg-black/90 text-white border-none flex items-center gap-2 h-10 px-4"
                aria-label="Follow on Instagram"
                onClick={() => window.open('https://www.instagram.com/precisocoffee', '_blank')}
              >
                <Instagram className="w-5 h-5" />
                <span className="hidden sm:inline">Instagram</span>
              </Button>

              <Button
                // variant="outline"
                className="bg-black hover:bg-black/90 text-white border-none flex items-center gap-2 h-10 px-4"
                aria-label="Follow on TikTok"
                onClick={() => window.open('https://www.tiktok.com/@preciso.coffee', '_blank')}
              >
                <TikTokIcon className="w-5 h-5" />
                <span className="hidden sm:inline">TikTok</span>
              </Button>

              <Button
                // variant="outline"
                className="bg-black hover:bg-black/90 text-white border-none flex items-center gap-2 h-10 px-4"
                aria-label="Follow on Facebook"
                onClick={() => window.open('https://www.facebook.com/precisocoffee', '_blank')}
              >
                <Facebook className="w-5 h-5" />
                <span className="hidden sm:inline">Facebook</span>
              </Button>
            </div>

            <p className="text-muted-foreground">
              Share your Preciso experience and get featured on our page
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
