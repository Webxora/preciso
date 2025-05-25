import { useEffect } from "react";
import type { ReactNode } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { ScrollIndicator } from "./ScrollIndicator";
import { Toaster } from "sonner";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  // Add smooth scrolling effect when navigating to anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        e.preventDefault();
        const section = document.querySelector(anchor.hash);
        if (section) {
          window.scrollTo({
            top: section.getBoundingClientRect().top + window.scrollY - 80,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Subtle background accents */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Accent gradient corners */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-black opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-black opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />

      {/* Fixed header */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Main content */}
      <main className="relative z-10">{children}</main>

      {/* Footer */}
      <Footer />

      {/* Toast notifications */}
      <Toaster position="top-right" />
    </div>
  );
}
