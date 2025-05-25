import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroCoffee() {
  return (
    <div className="relative">
      <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-black to-[var(--coffee-dark)] flex items-center justify-center overflow-hidden shadow-xl">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-white/20"></div>
          <div className="absolute bottom-1/3 left-1/4 w-16 h-16 rounded-full bg-white/10"></div>
        </div>

        {/* Main coffee image - black coffee */}
        <div className="w-[85%] h-[85%] rounded-full overflow-hidden bg-black/80 backdrop-blur-sm flex items-center justify-center">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=90&w=500&h=600"
            alt="Black coffee"
            className="w-auto h-auto max-h-[120%] object-contain transform hover:scale-105 transition-transform duration-500"
            width={450}
            height={550}
          />
        </div>

        {/* Coffee shop logo */}
        <div className="absolute right-0 top-1/4 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white p-1 shadow-lg">
          <div className="w-full h-full rounded-full flex items-center justify-center bg-black">
            <svg
              width="60%"
              height="60%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8C2 7.44772 2.44772 7 3 7H16C16.5523 7 17 7.44772 17 8V16C17 18.2091 15.2091 20 13 20H6C3.79086 20 2 18.2091 2 16V8Z"
                fill="#fff"
              />
              <path
                d="M17 10H19C20.6569 10 22 11.3431 22 13C22 14.6569 20.6569 16 19 16H17"
                stroke="#fff"
                strokeWidth="2"
              />
              <circle
                cx="7.5"
                cy="10.5"
                r="1.5"
                fill="var(--coffee-accent)"
              />
              <circle
                cx="11.5"
                cy="10.5"
                r="1.5"
                fill="var(--coffee-accent)"
              />
              <path
                d="M8 14C8 14 8.5 15 10 15C11.5 15 12 14 12 14"
                stroke="var(--coffee-accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Steam effect */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 opacity-80">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-float"
          >
            <path
              d="M12 4C12 4 14 7 14 9C14 11 12 12 12 12C12 12 10 11 10 9C10 7 12 4 12 4Z"
              fill="white"
              fillOpacity="0.5"
            />
            <path
              d="M7 6C7 6 9 8 9 10C9 12 7 13 7 13C7 13 5 12 5 10C5 8 7 6 7 6Z"
              fill="white"
              fillOpacity="0.3"
            />
            <path
              d="M17 6C17 6 19 8 19 10C19 12 17 13 17 13C17 13 15 12 15 10C15 8 17 6 17 6Z"
              fill="white"
              fillOpacity="0.3"
            />
          </svg>
        </div>
      </div>

      {/* Product tag with price */}
      <div className="absolute -left-4 bottom-10 bg-[var(--coffee-accent)] py-1 px-4 rounded-xl shadow-md rotate-[-15deg] z-10">
        <div className="text-[var(--coffee-dark)] text-xs font-semibold">
          Best Seller
        </div>
        <div className="text-[var(--coffee-dark)] font-bold">
          ₱249
        </div>
      </div>
    </div>
  );
}