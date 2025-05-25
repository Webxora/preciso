import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./animation/ScrollReveal";
import { cn } from "./ui/utils";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { HeroCoffee } from "./HeroCoffee";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen bg-[var(--coffee-cream)] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-10 top-40 w-64 h-64 rounded-full bg-black blur-3xl opacity-5"></div>
        <div className="absolute -left-20 bottom-40 w-48 h-48 rounded-full bg-[var(--coffee-dark)] blur-3xl opacity-5"></div>
      </div>

      {/* Floating coffee beans */}
      <div className="absolute top-[15%] right-[15%] w-16 h-16 opacity-20 animate-float">
        <svg
          viewBox="0 0 512 512"
          fill="currentColor"
          className="text-[var(--coffee-dark)]"
        >
          <path d="M352,376c-32-32-96-96-160-96c-80,0-96,16-96,80c0,112,80,134.4,128,134.4c48,0,96-3.2,128-51.2V376z" />
          <path d="M352,136c-32-48-80-51.2-128-51.2c-48,0-128,22.4-128,134.4c0,64,16,80,96,80c80,0,128-80,160-96V136z" />
        </svg>
      </div>
      <div
        className="absolute bottom-[20%] left-[10%] w-12 h-12 opacity-15 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <svg
          viewBox="0 0 512 512"
          fill="currentColor"
          className="text-[var(--coffee-dark)]"
        >
          <path d="M352,376c-32-32-96-96-160-96c-80,0-96,16-96,80c0,112,80,134.4,128,134.4c48,0,96-3.2,128-51.2V376z" />
          <path d="M352,136c-32-48-80-51.2-128-51.2c-48,0-128,22.4-128,134.4c0,64,16,80,96,80c80,0,128-80,160-96V136z" />
        </svg>
      </div>

      <div
        className={cn(
          "container mx-auto px-4 pt-24 transition-all duration-700",
          loaded ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left Column - Headline and Customer Stats */}
          <div className="space-y-8">
            <ScrollReveal delay={300}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight text-black leading-tight">
                WHERE
                <br />
                EVERY CUP
                <br />
                TELLS A STORY
              </h1>
            </ScrollReveal>

            {/* Customer stats with avatars */}
            <ScrollReveal delay={400}>
              <div className="flex flex-col gap-2">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100"
                      alt="Customer"
                      className="w-full h-full object-cover"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100"
                      alt="Customer"
                      className="w-full h-full object-cover"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100"
                      alt="Customer"
                      className="w-full h-full object-cover"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-black">
                    1M+
                  </span>
                  <span className="text-sm text-gray-600">
                    Satisfied Customer
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Coffee showcase gallery */}
            <ScrollReveal delay={500}>
              <div className="grid grid-cols-3 gap-2 mt-6">
                <div className="rounded-lg overflow-hidden h-20">
                  <ImageWithFallback
                    src="https://food-cms.grab.com/compressed_webp/items/PHITE2024112710375939353/detail/menueditor_item_231f16f195db4f72af98bab500021c4f_1732704870898450322.webp"
                    alt="Coffee beans"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    width={200}
                    height={150}
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-20">
                  <ImageWithFallback
                    src="https://food-cms.grab.com/compressed_webp/items/PHITE2025022510484680032/detail/menueditor_item_11e14e1aaa6e4ab481e2bacd053b7ebb_1740481884296893382.webp"
                    alt="Coffee roasting"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    width={200}
                    height={150}
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-20">
                  <ImageWithFallback
                    src="https://food-cms.grab.com/compressed_webp/items/PHITE2024112710361965591/detail/menueditor_item_52ad381532ed4f4880031240c5fa28d3_1732704603580559230.webp"
                    alt="Coffee brewing"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    width={200}
                    height={150}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Coffee Image and Description */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex justify-center relative">
              <HeroCoffee />

              {/* Quality badge */}
              <div className="absolute -right-4 top-10 rotate-12 bg-[var(--coffee-accent)] text-white text-xs font-bold uppercase py-1 px-3 rounded-full shadow-md">
                Premium Quality
              </div>
            </div>

            {/* Description and Shop Now button */}
            <ScrollReveal
              delay={600}
              className="max-w-xs md:max-w-sm mt-8 lg:mt-12 lg:ml-auto"
            >
              <p className="text-sm text-gray-600 mb-6">
                Complete your day with the perfect balance of
                warmth and flavor in every cup, bringing energy
                and life to every moment.
              </p>

              <div className="flex gap-4 items-center">
                <button
                  className="bg-black hover:bg-gray-800 text-white text-sm rounded-full px-5 py-3 flex items-center gap-2 group transition-all"
                  aria-label="Located at"
                  onClick={() => {
                    const locationSection = document.getElementById("location");
                    if (locationSection) {
                      locationSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Located at
                  <span className="group-hover:ml-1 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>

                <a
                  href="#menu"
                  className="border border-[var(--coffee-dark)] hover:bg-[var(--coffee-dark)] text-[var(--coffee-dark)] hover:text-white text-sm rounded-full px-5 py-3 flex items-center gap-2 group transition-all"
                  aria-label="View our menu"
                >
                  Our Menu
                </a>

                {/* Rating */}
                <div className="hidden sm:flex flex-col">
                  <div className="flex text-[var(--coffee-accent)]">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-500">
                    4.9 (2.5k Reviews)
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Coffee store details at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-300">
                  Opening Hours
                </div>
                <div className="text-sm font-medium text-white">
                  08:00 AM - 10:00 PM
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-300">
                  Our Location
                </div>
                <div className="text-sm font-medium text-white">
                  460 Jose Abad Santos Avenue, Mexico,
                  Philippines
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-300">
                  Contact Us
                </div>
                <div className="text-sm font-medium text-white">
                  0966 861 9080
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}