// import React from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollReveal } from "./animation/ScrollReveal";

interface InstagramPost {
  id: string;
  imageUrl: string;
  profileImage: string;
  username: string;
  followers: string;
  caption?: string;
}

// Sample Instagram feed data - in a real app, this would come from an API
const instagramPosts: InstagramPost[] = [
  {
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    profileImage: "/images/preciso-logo-small.png",
    username: "precisocoffee",
    followers: "526 followers",
    caption: "The best conversations happen over coffee ☕ #PrecisoCoffee",
  },
  {
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    profileImage: "/images/preciso-logo-small.png",
    username: "precisocoffee",
    followers: "526 followers",
    caption: "Morning ritual at Preciso #CoffeeMoments",
  },
  {
    id: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    profileImage: "/images/preciso-logo-small.png",
    username: "precisocoffee",
    followers: "526 followers",
    caption: "Friends and coffee - the perfect combination #PrecisoCoffee",
  },
  {
    id: "4",
    imageUrl:
      "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    profileImage: "/images/preciso-logo-small.png",
    username: "precisocoffee",
    followers: "526 followers",
    caption: "Coffee talks and laughter at Preciso ☕ #PrecisoMoments",
  },
  {
    id: "5",
    imageUrl:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    profileImage: "/images/preciso-logo-small.png",
    username: "precisocoffee",
    followers: "526 followers",
    caption: "That first sip feeling... #MorningCoffee #PrecisoCoffee",
  },
  {
    id: "6",
    imageUrl:
      "https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    profileImage: "/images/preciso-logo-small.png",
    username: "precisocoffee",
    followers: "526 followers",
    caption: "Weekend vibes at Preciso #CoffeeAndFriends",
  },
  {
    id: "7",
    imageUrl:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    profileImage: "/images/preciso-logo-small.png",
    username: "precisocoffee",
    followers: "526 followers",
    caption: "Coffee art at its finest ☕ #LatteArt #PrecisoCoffee",
  },
  {
    id: "8",
    imageUrl:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    profileImage: "/images/preciso-logo-small.png",
    username: "precisocoffee",
    followers: "526 followers",
    caption: "The art of brewing the perfect cup #BaristaLife",
  },
  {
    id: "9",
    imageUrl:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    profileImage: "/images/preciso-logo-small.png",
    username: "precisocoffee",
    followers: "526 followers",
    caption: "From bean to cup - the journey of our coffee #BehindTheScenes",
  },
];

// Instagram Post Card Component
const InstagramPostCard = ({ post }: { post: InstagramPost }) => {
  return (
    <div className="instagram-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-3 flex items-center justify-between border-b">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 mr-3">
            <ImageWithFallback
              src="https://picsum.photos/32/32"
              alt="Preciso Coffee Profile"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium">{post.username}</p>
            <p className="text-xs text-gray-500">{post.followers}</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="h-8 px-3 bg-black text-white hover:bg-black/90 border-none text-xs"
        >
          View profile
        </Button>
      </div>

      <div className="aspect-square w-full relative">
        <ImageWithFallback
          src={post.imageUrl}
          alt={post.caption || "Instagram post from Preciso Coffee"}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      {post.caption && (
        <div className="p-3 text-sm">
          <p>
            <span className="font-medium">{post.username}</span> {post.caption}
          </p>
        </div>
      )}
    </div>
  );
};

export function CustomInstagramFeed() {
  return (
    <div className="instagram-feed-container">
      <h3 className="text-center text-xl mb-8">Follow us on Instagram</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {instagramPosts.map((post) => (
          <ScrollReveal key={post.id} delay={Number(post.id) * 0.05}>
            <InstagramPostCard post={post} />
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Button
          className="bg-black text-white hover:bg-black/90 mt-4"
          onClick={() =>
            window.open("https://www.instagram.com/precisocoffee", "_blank")
          }
        >
          See More on Instagram
        </Button>
      </div>
    </div>
  );
}
