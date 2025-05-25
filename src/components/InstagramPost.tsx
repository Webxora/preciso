
import React from "react";
import { Heart, MessageCircle, Send, Bookmark, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "@/assets/logo.jpg";

interface InstagramPostProps {
  imageUrl: string;
  caption?: string;
  likes?: number;
  instagramUrl?: string;
}

export function InstagramPost({ 
  imageUrl, 
  caption = "Coffee clubbing at Preciso Coffee ☕ Join us for a special night of coffee and music!",
  likes = 15,
  instagramUrl = "https://www.instagram.com/precisocoffee"
}: InstagramPostProps) {
  
  const handleClick = () => {
    window.open(instagramUrl, "_blank");
  };

  return (
    <div className="instagram-post border border-gray-200 bg-white rounded-md overflow-hidden max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-100">
        <div className="flex items-center cursor-pointer" onClick={handleClick}>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 mr-3">
            <ImageWithFallback
              src={logo}
              alt="Preciso Coffee"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-xs">precisocoffee</p>
            <p className="text-xs text-gray-500">Preciso Coffee</p>
          </div>
        </div>
        <button 
          className="bg-black text-white px-3 py-1 text-xs font-medium rounded cursor-pointer"
          onClick={handleClick}
        >
          View profile
        </button>
      </div>
      
      {/* Image */}
      <div 
        className="instagram-post-image aspect-square relative cursor-pointer" 
        onClick={handleClick}
      >
        <ImageWithFallback
          src={imageUrl}
          alt="Preciso Coffee Instagram Post"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
        
        {/* Image navigation */}
        <button 
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/20 rounded-full p-1 cursor-pointer"
          onClick={handleClick}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
      
      {/* Action Bar */}
      <div className="p-3">
        <div className="flex justify-between mb-2">
          <div className="flex gap-4">
            <button 
              onClick={handleClick} 
              aria-label="Like" 
              className="cursor-pointer hover:opacity-70 transition-opacity"
            >
              <Heart className="w-5 h-5 text-black" />
            </button>
            <button 
              onClick={handleClick} 
              aria-label="Comment" 
              className="cursor-pointer hover:opacity-70 transition-opacity"
            >
              <MessageCircle className="w-5 h-5 text-black" />
            </button>
            <button 
              onClick={handleClick} 
              aria-label="Share" 
              className="cursor-pointer hover:opacity-70 transition-opacity"
            >
              <Send className="w-5 h-5 text-black" />
            </button>
          </div>
          <button 
            onClick={handleClick} 
            aria-label="Save" 
            className="cursor-pointer hover:opacity-70 transition-opacity"
          >
            <Bookmark className="w-5 h-5 text-black" />
          </button>
        </div>
        
        {/* Likes */}
        <p className="font-semibold text-xs mb-1 cursor-pointer" onClick={handleClick}>
          {likes} likes
        </p>
        
        {/* Caption */}
        {caption && (
          <p className="text-xs mb-2 cursor-pointer" onClick={handleClick}>
            <span className="font-semibold mr-1">precisocoffee</span>
            {caption}
          </p>
        )}
        
        {/* Comment placeholder */}
        <div 
          className="text-gray-400 text-xs mt-3 border-t border-gray-100 pt-3 cursor-pointer"
          onClick={handleClick}
        >
          Add a comment...
        </div>
      </div>
      
      {/* Footer */}
      <div 
        className="p-3 border-t border-gray-100 text-center cursor-pointer"
        onClick={handleClick}
      >
        <a 
          href={instagramUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black font-medium text-xs"
        >
          View more on Instagram
        </a>
      </div>
    </div>
  );
}
