// import { useState } from "react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
// import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
// import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
// import { cn } from "./ui/utils";
// import { ScrollReveal } from "./animation/ScrollReveal";

// type Testimonial = {
//   id: number;
//   name: string;
//   role: string;
//   avatar: string;
//   quote: string;
//   rating: number;
// };

// export function Testimonials() {
//   const testimonials: Testimonial[] = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       role: "Coffee Enthusiast",
//       avatar:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
//       quote:
//         "Preciso has completely changed my coffee experience. Their attention to detail and commitment to quality makes every cup exceptional. The drive-thru option is perfect for my busy mornings!",
//       rating: 5,
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       role: "Local Foodie",
//       avatar:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
//       quote:
//         "I've tried coffee shops all over Pampanga, and Preciso stands head and shoulders above the rest. Their cappuccino is perfectly balanced with a beautiful microfoam that's truly impressive.",
//       rating: 5,
//     },
//     {
//       id: 3,
//       name: "Elena Rodriguez",
//       role: "Digital Nomad",
//       avatar:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
//       quote:
//         "As someone who works remotely, finding the perfect coffee spot is essential. Preciso not only has amazing coffee but also creates an environment where I can be productive and inspired.",
//       rating: 4,
//     },
//     {
//       id: 4,
//       name: "David Park",
//       role: "Coffee Connoisseur",
//       avatar:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
//       quote:
//         "The level of craft at Preciso is unmatched. You can taste the precision in every sip. Their seasonal single-origin offerings are always something I look forward to trying.",
//       rating: 5,
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   const nextTestimonial = () => {
//     setActiveIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setActiveIndex(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   return <section className="py-20 bg-coffee-cream/20"></section>;
// }
