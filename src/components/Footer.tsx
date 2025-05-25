import {
  // Coffee,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { TikTokIcon } from "./icons/TikTokIcon";
import logo from "@/assets/logo.jpg";

export function Footer() {
  const navLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Our Menu", href: "#menu" },
        { name: "Gallery", href: "#gallery" },
        { name: "Education", href: "#education" },
      ],
    },
    {
      title: "Our Offerings",
      links: [
        { name: "Espresso", href: "#menu" },
        { name: "Pour Over", href: "#menu" },
        { name: "Cold Brew", href: "#menu" },
        { name: "Specialty Drinks", href: "#menu" },
        { name: "Coffee Beans", href: "#menu" },
        { name: "Pastries", href: "#menu" },
      ],
    },
    {
      title: "Information",
      links: [{ name: "Location", href: "#location" }],
    },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-white p-0.5 rounded-lg">
                {/* <Coffee className="h-6 w-6 text-[var(--coffee-dark)]" /> */}
                <img src={logo} alt="Logo" className="h-6 w-6" />
              </div>
              <span className="text-xl font-semibold">Preciso</span>
            </div>

            <p className="text-[var(--coffee-cream)]/80 max-w-xs">
              First Specialty Coffee drive-thru in Pampanga, bringing
              high-quality crafted coffee with convenience.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[var(--coffee-cream)]/60" />
                <span className="text-[var(--coffee-cream)]/80">
                  460 Jose Abad Santos Ave, Mexico, Pampanga
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[var(--coffee-cream)]/60" />
                <span className="text-[var(--coffee-cream)]/80">
                  0966 861 9080
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[var(--coffee-cream)]/60" />
                <span className="text-[var(--coffee-cream)]/80">
                  precisocoffee@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-[var(--coffee-cream)]/60" />
                <span className="text-[var(--coffee-cream)]/80">
                  Mon-Sun: 8:00 AM - 10:00 PM
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/precisocoffee"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/precisocoffee/"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@preciso.coffee"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          {navLinks.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-lg font-semibold">{category.title}</h4>
              <ul className="space-y-3">
                {category.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-[var(--coffee-cream)]/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between">
          <p className="text-[var(--coffee-cream)]/60 text-sm">
            © {new Date().getFullYear()} Preciso Coffee.
          </p>
          <p className="text-[var(--coffee-cream)]/60 text-sm">
            Designed and developed by{" "}
            <a
              href="https://www.webxora.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[var(--coffee-cream)]"
            >
              WebXora
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
