import React from "react";
import { InstagramPost } from "./InstagramPost";
import { ScrollReveal } from "./animation/ScrollReveal";
import person1 from "@/assets/images/1.png";
import person2 from "@/assets/images/2.png";
import person3 from "@/assets/images/3.png";
import person4 from "@/assets/images/4.png";
import person5 from "@/assets/images/5.png";
import person6 from "@/assets/images/6.png";
import person7 from "@/assets/images/7.png";
import person8 from "@/assets/images/8.png";
import person9 from "@/assets/images/9.png";

export function InstagramGrid() {
  // Instagram posts with varied content - each will have exactly the same dimensions
  const posts = [
    {
      id: 1,
      Url: "https://www.instagram.com/p/DIGIzdkyxDa/",
      imageUrl: person1,
      caption:
        "Still can’t get over last Friday! ✨ Thank you so much to everyone who came through — you made Preciso feel so alive 🫶🏻",
      likes: 15,
    },
    {
      id: 2,
      Url: "https://www.instagram.com/p/DHFK2fly2Zw/",
      imageUrl: person2,
      caption:
        "Crafted with care, served with a smile! ☕✨ Our baristas are ready to fuel your day with your favorite drinks. Swing by and let us make your coffee moments extra special! 🤎",
      likes: 32,
    },
    {
      id: 3,
      Url: "https://www.instagram.com/p/DILLC-WS-4q/",
      imageUrl: person3,
      caption:
        "Our baristas had the best time hanging out with this cutie! Don’t forget we’re proudly pet-friendly, so bring your furry pals next time you drop by for your favorite brew ☕🐶💕 #PrecisoCoffee",
      likes: 27,
    },
    {
      id: 4,
      Url: "https://www.instagram.com/p/DJDYVqKSJk6/",
      imageUrl: person4,
      caption:
        "Happy Payday! Treat yourself and spend the day with us because you deserve it! ☕️✨ Good vibes, great company, and even better coffee 🤎",
      likes: 43,
    },
    {
      id: 5,
      Url: "https://www.instagram.com/p/DE9QmNKyxe5/",
      imageUrl: person5,
      caption:
        "Treat yourself to something extra! 🌟 \n\n Collect a stamp for every drink you enjoy, and on your 10th, take home a free tote bag. Ask our baristas for your loyalty card and start sipping your way to rewards! 🙂‍↕️☕️",
      likes: 29,
    },
    {
      id: 6,
      Url: "https://www.instagram.com/p/DDyNc8kBp9C/",
      imageUrl: person6,
      caption:
        "5 days till Christmas! 🥰🎄Here are the first two customers to claim their free tote bags with Preciso Coffee Loyalty Cards. ☕✨ Collect a stamp for every drink you enjoy, and on your 10th, choose a tote bag of your choice. It’s the perfect reward for the season of giving. Ask our baristas for your loyalty card today and celebrate the countdown with every sip! 💝",
      likes: 38,
    },
    {
      id: 7,
      Url: "https://www.instagram.com/p/DDTjqVmBopK/",
      imageUrl: person7,
      caption:
        "It’s Sunday, the Christmas season is here, and there’s nothing better than sharing moments over drinks and pastries at Preciso Coffee! 🤎",
      likes: 53,
    },
    {
      id: 8,
      Url: "https://www.instagram.com/p/DBgCy5eN1Ws/",
      imageUrl: person8,
      caption:
        "We are beyond grateful for every barista here at Preciso. Happiest Birthday Alaska ! 🍰🎉",
      likes: 41,
    },
    {
      id: 9,
      Url: "https://www.instagram.com/p/C-pFYGvpXiE/",
      imageUrl: person9,
      caption:
        "Busy day ahead? Skip the wait—swing by Preciso’s drive-thru for quick, perfect coffee on the go! 💨☕️ \n\nServing you from 8am-11pm daily ✨ \n\n#precisocoffee #specialtycoffee #drivethru #pampanga",
      likes: 36,
    },
  ];

  return (
    <div className="instagram-grid-container w-full max-w-6xl mx-auto">
      <h3 className="text-center text-xl mb-8">Follow us on Instagram</h3>

      {/* Fixed width container with precise grid gap for alignment */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div key={post.id} className="flex items-stretch h-full">
            <InstagramPost
              imageUrl={post.imageUrl}
              caption={post.caption}
              likes={post.likes}
              instagramUrl={post.Url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
