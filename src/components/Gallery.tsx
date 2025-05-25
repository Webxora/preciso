
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription, DialogClose } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { cn } from "./ui/utils";
import { ScrollReveal } from "./animation/ScrollReveal";
import { X, Eye } from "lucide-react";

export function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery images with category tags
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Barista preparing latte art",
      categories: ["drinks", "craft"]
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Coffee beans roasting in machine",
      categories: ["beans", "ingredients"]
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Coffee cup with latte art on wooden table",
      categories: ["drinks"]
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Cup of coffee on table",
      categories: ["drinks"]
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1542834291-c514e77b215f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Barista tamping coffee grounds",
      categories: ["craft", "staff"]
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Coffee shop interior",
      categories: ["interior"]
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Iced coffee with cream being poured",
      categories: ["food", "drinks"]
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Coffee plantation",
      categories: ["beans", "ingredients"]
    }
  ];

  // Filter categories
  const filters = [
    { id: "all", label: "All" },
    { id: "drinks", label: "Drinks" },
    { id: "craft", label: "Craft" },
    { id: "beans", label: "Beans" },
    { id: "food", label: "Food" },
    { id: "interior", label: "Interior" }
  ];

  // Filter images based on selected category
  const filteredImages = selectedFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.categories.includes(selectedFilter));

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge 
              variant="outline" 
              className="mb-3 border-zinc-200 bg-zinc-50 text-zinc-800 hover:bg-zinc-100"
            >
              Our Gallery
            </Badge>
            <h2 className="text-3xl md:text-4xl mb-4">Coffee Moments Captured</h2>
            <p className="text-zinc-600">
              Explore our vibrant collection of coffee moments, from bean to cup, 
              capturing the essence of our passion for exceptional coffee.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={cn(
                  "px-4 py-2 rounded-full transition-colors",
                  selectedFilter === filter.id 
                    ? "bg-black text-white" 
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <Dialog key={image.id}>
                <DialogTrigger asChild>
                  <div 
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group hover-lift"
                    onClick={() => setSelectedImage(image)}
                  >
                    <ImageWithFallback
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <Eye className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-white text-sm uppercase tracking-wider font-medium">View Image</span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl bg-transparent border-0 p-0 gallery-dialog">
                  <DialogTitle className="sr-only">
                    {image.alt}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    A larger view of {image.alt.toLowerCase()}
                  </DialogDescription>
                  
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
