// import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FallbackCoffeeImage() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-dark to-black opacity-80"></div>

      <div className="relative w-3/4 aspect-square max-w-[300px]">
        {/* Coffee cup illustration */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-[200px]">
            {/* Cup saucer */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-5 bg-white/90 rounded-full"></div>

            {/* Cup body */}
            <div className="relative w-full aspect-[1/1.1] bg-white rounded-b-3xl rounded-t-xl overflow-hidden">
              {/* Coffee liquid */}
              <div className="absolute top-[15%] left-[10%] right-[10%] bottom-0 bg-coffee-dark rounded-b-2xl">
                {/* Coffee shine */}
                <div className="absolute top-2 left-[15%] w-[25%] h-[8%] bg-coffee-medium/30 rounded-full blur-sm"></div>
                <div className="absolute top-4 right-[20%] w-[15%] h-[5%] bg-coffee-medium/20 rounded-full blur-sm"></div>
              </div>

              {/* Cup rim */}
              <div className="absolute top-[15%] left-0 right-0 h-2 bg-white/80"></div>

              {/* Cup handle */}
              <div className="absolute top-[30%] right-[-15%] w-[30%] h-[40%] border-r-4 border-t-4 border-b-4 border-white rounded-r-full"></div>
            </div>

            {/* Steam */}
            <div className="absolute top-[5%] left-[30%] w-1 h-12 bg-white/10 rounded-full blur-sm animate-float"></div>
            <div className="absolute top-[2%] left-[50%] w-1.5 h-16 bg-white/10 rounded-full blur-sm animate-float stagger-2"></div>
            <div className="absolute top-[3%] left-[60%] w-1 h-14 bg-white/10 rounded-full blur-sm animate-float stagger-3"></div>
          </div>
        </div>
      </div>

      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
        <h3 className="text-white font-bold text-3xl tracking-widest mb-1 drop-shadow-md">
          PREMIUM COFFEE
        </h3>
        <div className="bg-white/90 px-4 py-1 rounded-full inline-block mx-auto">
          <p className="text-coffee-dark text-sm font-medium">
            First Specialty Coffee drive-thru in Pampanga
          </p>
        </div>
      </div>
    </div>
  );
}
