
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Coffee, Flame, Leaf } from "lucide-react";
import { Badge } from "./ui/badge";
import { ScrollReveal } from "./animation/ScrollReveal";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import introVideo from "@/assets/videos/preciso-video.mp4";

export function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle video loading
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  // Handle play/pause with error handling
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video || !isVideoLoaded) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      // Use a promise with proper error handling
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.log("Safe error handling for video:", error);
            // Don't update state if there was an error
          });
      }
    }
  };

  // Handle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <div className="py-24 bg-coffee-foam/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge 
              variant="outline" 
              className="mb-3 border-zinc-200 bg-zinc-50 text-zinc-800 hover:bg-zinc-100"
            >
              Experience
            </Badge>
            <h2 className="text-3xl md:text-4xl mb-4">Our Craft Process</h2>
            <p className="text-zinc-600">
              At Preciso, we believe that exceptional coffee is the result of precision, passion, and a dedication to craft.
              Watch our process unfold from bean to cup.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div 
            ref={containerRef}
            className="relative mx-auto rounded-2xl overflow-hidden shadow-xl mb-16"
            style={{ 
              width: "100%", 
              maxWidth: "960px", 
              height: "auto", 
              aspectRatio: "16/9" 
            }}
          >
            {/* Fallback image shown initially and if video fails */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="Coffee being poured into cups with latte art"
                width={960}
                height={540}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Video Element with controls hidden */}
            <video 
              ref={videoRef}
              className={`w-full h-full object-cover absolute inset-0 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
              poster="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              width={960}
              height={540}
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={introVideo} type="video/mp4" />
              {/* Multiple fallback sources */}
              <source src={introVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Controls Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
              {/* Video main play button */}
              <div className="flex-grow flex items-center justify-center">
                <button 
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-black/30 transition-all"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-white ml-1" />
                  )}
                </button>
              </div>
              
              {/* Bottom controls with caption */}
              <div className="flex justify-between items-center">
                {/* Left side volume control */}
                <button 
                  onClick={toggleMute}
                  className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center hover:bg-black/30 transition-all"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-white" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-white" />
                  )}
                </button>
                
                {/* Right side caption */}
                <div className="bg-black/20 backdrop-blur-sm rounded-full py-2 px-4">
                  <p className="text-white text-sm font-medium">Handcrafted with passion and precision</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            {/* Bean Selection */}
            <div className="bg-white p-8 shadow-sm hover-lift">
              <div className="flex flex-col items-start mb-6">
                <Leaf className="w-6 h-6 text-coffee-medium mb-2" />
                <span className="text-xs font-medium text-coffee-medium">01</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Bean Selection</h3>
              <p className="text-zinc-600">
                We carefully source our beans from sustainable farms, selecting only the highest quality single-origin varieties.
              </p>
            </div>
            
            {/* Precise Roasting */}
            <div className="bg-white p-8 shadow-sm hover-lift">
              <div className="flex flex-col items-start mb-6">
                <Flame className="w-6 h-6 text-coffee-medium mb-2" />
                <span className="text-xs font-medium text-coffee-medium">02</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Precise Roasting</h3>
              <p className="text-zinc-600">
                Our roasting process is calibrated to perfection, bringing out the unique flavor profile of each bean variety.
              </p>
            </div>
            
            {/* Artisanal Brewing */}
            <div className="bg-white p-8 shadow-sm hover-lift">
              <div className="flex flex-col items-start mb-6">
                <Coffee className="w-6 h-6 text-coffee-medium mb-2" />
                <span className="text-xs font-medium text-coffee-medium">03</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Artisanal Brewing</h3>
              <p className="text-zinc-600">
                Our baristas are trained in multiple brewing methods, ensuring each cup is crafted to highlight the coffee's best qualities.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
