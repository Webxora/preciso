import { useState, useEffect } from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import logo from "../assets/logo.jpg";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-background/95 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <img src={logo} className="h-9 mr-2" />
          {/* <span className="text-xl font-bold">Preciso</span> */}
        </a>

        <nav className="font-sans hidden md:flex items-center space-x-1">
          <a
            href="#home"
            className="px-3 py-2 text-sm hover:text-[var(--coffee-medium)] transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-3 py-2 text-sm hover:text-[var(--coffee-medium)] transition-colors"
          >
            About
          </a>
          <a
            href="#menu"
            className="px-3 py-2 text-sm hover:text-[var(--coffee-medium)] transition-colors"
          >
            Menu
          </a>
          <a
            href="#gallery"
            className="px-3 py-2 text-sm hover:text-[var(--coffee-medium)] transition-colors"
          >
            Gallery
          </a>
          <a
            href="#moments"
            className="px-3 py-2 text-sm hover:text-[var(--coffee-medium)] transition-colors"
          >
            Moments
          </a>
          <a
            href="#location"
            className="px-3 py-2 text-sm hover:text-[var(--coffee-medium)] transition-colors"
          >
            Location
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeSwitch />

          <button
            className="block md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-foreground"
            >
              {isMobileMenuOpen ? (
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <a
              href="#home"
              className="px-3 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="px-3 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#menu"
              className="px-3 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </a>
            <a
              href="#gallery"
              className="px-3 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </a>
            <a
              href="#moments"
              className="px-3 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Moments
            </a>
            <a
              href="#location"
              className="px-3 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Location
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
