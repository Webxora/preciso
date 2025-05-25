
import { cn } from "./utils";

interface SectionStripProps {
  className?: string;
}

export function SectionStrip({ className }: SectionStripProps) {
  return (
    <div className={cn("relative w-full overflow-hidden h-24", className)}>
      {/* First Strip - Dark Green */}
      <div 
        className="absolute w-[200%] left-0 transform coffee-strip"
        style={{ transform: 'rotate(-5deg) translateY(-20%)' }}
      >
        <div className="flex">
          <div className="flex-1 py-4 px-4 bg-[var(--coffee-dark)] text-white">
            <div className="flex items-center gap-3 animate-slide-slow whitespace-nowrap">
              <span className="text-xl md:text-2xl font-bold">Cappuccino</span>
              <span className="flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" fill="#7B4B0D"/>
                  <path d="M5 21C5 16.5817 8.13401 13 12 13C15.866 13 19 16.5817 19 21H17C17 17.6863 14.7614 15 12 15C9.23858 15 7 17.6863 7 21H5Z" fill="#7B4B0D"/>
                </svg>
              </span>
              <span className="text-xl md:text-2xl font-bold">Espresso</span>
              <span className="flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" fill="#7B4B0D"/>
                  <path d="M5 21C5 16.5817 8.13401 13 12 13C15.866 13 19 16.5817 19 21H17C17 17.6863 14.7614 15 12 15C9.23858 15 7 17.6863 7 21H5Z" fill="#7B4B0D"/>
                </svg>
              </span>
              <span className="text-xl md:text-2xl font-bold">Moca</span>
              <span className="flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" fill="#7B4B0D"/>
                  <path d="M5 21C5 16.5817 8.13401 13 12 13C15.866 13 19 16.5817 19 21H17C17 17.6863 14.7614 15 12 15C9.23858 15 7 17.6863 7 21H5Z" fill="#7B4B0D"/>
                </svg>
              </span>
              <span className="text-xl md:text-2xl font-bold">Latte</span>
              <span className="flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" fill="#7B4B0D"/>
                  <path d="M5 21C5 16.5817 8.13401 13 12 13C15.866 13 19 16.5817 19 21H17C17 17.6863 14.7614 15 12 15C9.23858 15 7 17.6863 7 21H5Z" fill="#7B4B0D"/>
                </svg>
              </span>
              <span className="text-xl md:text-2xl font-bold">Americano</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Second Strip - Yellow */}
      <div 
        className="absolute w-[200%] left-0 transform coffee-strip"
        style={{ transform: 'rotate(-5deg) translateY(30%)' }}
      >
        <div className="flex">
          <div className="flex-1 py-4 px-4 bg-[var(--coffee-accent)] text-[var(--coffee-medium)]">
            <div className="flex items-center gap-3 animate-slide-slow whitespace-nowrap" style={{ animationDelay: '-5s' }}>
              <span className="text-xl md:text-2xl font-bold uppercase">Cappuccino</span>
              <span className="flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" fill="#7B4B0D"/>
                  <path d="M5 21C5 16.5817 8.13401 13 12 13C15.866 13 19 16.5817 19 21H17C17 17.6863 14.7614 15 12 15C9.23858 15 7 17.6863 7 21H5Z" fill="#7B4B0D"/>
                </svg>
              </span>
              <span className="text-xl md:text-2xl font-bold uppercase">Espresso</span>
              <span className="flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" fill="#7B4B0D"/>
                  <path d="M5 21C5 16.5817 8.13401 13 12 13C15.866 13 19 16.5817 19 21H17C17 17.6863 14.7614 15 12 15C9.23858 15 7 17.6863 7 21H5Z" fill="#7B4B0D"/>
                </svg>
              </span>
              <span className="text-xl md:text-2xl font-bold uppercase">Latte</span>
              <span className="flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" fill="#7B4B0D"/>
                  <path d="M5 21C5 16.5817 8.13401 13 12 13C15.866 13 19 16.5817 19 21H17C17 17.6863 14.7614 15 12 15C9.23858 15 7 17.6863 7 21H5Z" fill="#7B4B0D"/>
                </svg>
              </span>
              <span className="text-xl md:text-2xl font-bold uppercase">Americano</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
