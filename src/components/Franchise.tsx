import {
  ArrowRight,
  ChevronRight,
  Briefcase,
  TrendingUp,
  Clock,
  Award,
  // DollarSign,
  Users,
  Info,
  Calendar,
} from "lucide-react";
import { ScrollReveal } from "./animation/ScrollReveal";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "./ui/carousel";
import { useEffect, useState } from "react";

export function Franchise() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  // Track current slide for dots
  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const franchiseImages = [
    {
      src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Preciso Coffee Shop Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Coffee Shop Barista",
    },
    {
      src: "https://images.unsplash.com/photo-1467189386127-c4e5e31ee213?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Coffee Shop Customers",
    },
    {
      src: "https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Preciso Signature Coffee",
    },
    {
      src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Coffee Shop Exterior",
    },
  ];

  const franchiseSteps = [
    {
      id: 1,
      title: "Initial Inquiry",
      description:
        "Fill out our franchise application form to express your interest in becoming a Preciso Coffee Shop franchisee.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Discovery Meeting",
      description:
        "Meet with our franchise team to discuss opportunities and determine if there's a mutual fit.",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "Business Planning",
      description:
        "Develop a comprehensive business plan with guidance from our experienced franchise consultants.",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      id: 4,
      title: "Training & Launch",
      description:
        "Complete our intensive training program and prepare for your grand opening with our support team.",
      icon: <Clock className="w-5 h-5" />,
    },
  ];

  const benefitsList = [
    "Proven business model with strong profit margins",
    "Comprehensive training and ongoing support",
    "Established brand recognition and marketing materials",
    "Access to premium coffee suppliers and equipment",
    "Site selection and store design assistance",
    "Exclusive territory rights",
  ];

  return (
    <div className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10"></div>

      {/* Coffee bean decorations */}
      <div className="absolute top-20 right-10 w-16 h-16 opacity-10 animate-float">
        <svg
          viewBox="0 0 512 512"
          fill="currentColor"
          className="text-[var(--coffee-accent)]"
        >
          <path d="M352,376c-32-32-96-96-160-96c-80,0-96,16-96,80c0,112,80,134.4,128,134.4c48,0,96-3.2,128-51.2V376z" />
          <path d="M352,136c-32-48-80-51.2-128-51.2c-48,0-128,22.4-128,134.4c0,64,16,80,96,80c80,0,128-80,160-96V136z" />
        </svg>
      </div>
      <div
        className="absolute bottom-40 left-20 w-12 h-12 opacity-10 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <svg
          viewBox="0 0 512 512"
          fill="currentColor"
          className="text-[var(--coffee-accent)]"
        >
          <path d="M352,376c-32-32-96-96-160-96c-80,0-96,16-96,80c0,112,80,134.4,128,134.4c48,0,96-3.2,128-51.2V376z" />
          <path d="M352,136c-32-48-80-51.2-128-51.2c-48,0-128,22.4-128,134.4c0,64,16,80,96,80c80,0,128-80,160-96V136z" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge
              variant="outline"
              className="mb-4 border-[var(--coffee-accent)] bg-black text-[var(--coffee-accent)] hover:bg-black/80"
            >
              Join Our Family
            </Badge>
            <h2 className="text-3xl md:text-4xl mb-6">
              Franchise Opportunities
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Take part in our success story and become a Preciso Coffee Shop
              franchise owner. We&apos;re looking for passionate entrepreneurs
              to help expand our premium coffee experience.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Franchise Information */}
          <ScrollReveal className="space-y-8">
            <div className="bg-zinc-900 rounded-[20px] p-6 shadow-md border border-zinc-800">
              <h3 className="text-xl mb-4 border-b pb-2 border-zinc-800">
                Franchise Opportunity
              </h3>
              <p className="text-zinc-300 mb-6">
                Preciso Coffee Shop offers a premium franchise opportunity for
                entrepreneurs who are passionate about quality coffee and
                exceptional customer service. Our detailed franchise information
                package contains everything you need to know about joining our
                growing family of successful franchisees.
              </p>

              <div className="bg-zinc-950 p-4 rounded-[20px] border border-zinc-800 mb-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[var(--coffee-accent)] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-400">
                    Complete information about investment requirements, royalty
                    fees, and financial projections is available upon request.
                    Contact our franchise development team to receive our
                    comprehensive franchise information package.
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-start">
                <Button className="bg-[var(--coffee-accent)] hover:bg-[var(--coffee-accent)]/80 text-black rounded-[20px]">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-[20px] p-6 shadow-md border border-zinc-800">
              <h3 className="text-xl mb-4 border-b pb-2 border-zinc-800">
                Franchise Benefits
              </h3>
              <ul className="space-y-2">
                {benefitsList.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[var(--coffee-accent)] mt-1">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                    <span className="text-zinc-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Right Column - Image Carousel and Testimonial */}
          <div className="space-y-8">
            <ScrollReveal>
              <div className="relative rounded-[20px] overflow-hidden h-64 md:h-80 shadow-md">
                <Carousel
                  className="w-full h-full"
                  setApi={setApi}
                  opts={{ loop: true, align: "start" }}
                >
                  <CarouselContent className="h-full">
                    {franchiseImages.map((image, index) => (
                      <CarouselItem key={index} className="h-full">
                        <div className="relative h-full w-full">
                          <ImageWithFallback
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                            width={1000}
                            height={800}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/40 flex items-end p-6">
                            <div className="text-white">
                              <p className="text-sm opacity-90">
                                Experience the taste of success
                              </p>
                              <h3 className="text-xl font-medium">
                                Preciso Coffee Shop
                              </h3>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>

                {/* Navigation dots */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
                  {franchiseImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        current === index
                          ? "bg-[var(--coffee-accent)] w-4"
                          : "bg-white/60 hover:bg-white/80"
                      }`}
                      onClick={() => api?.scrollTo(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Testimonial */}
            <ScrollReveal delay={200}>
              <Card className="bg-zinc-900 text-white border-zinc-800 shadow-lg rounded-[20px]">
                <CardContent className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[var(--coffee-accent)] flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="italic mb-4 text-zinc-300">
                        &quot;Joining the Preciso family was the best business
                        decision I&apos;ve made. The training and support are
                        exceptional, and the brand&apos;s reputation for quality
                        has helped us build a loyal customer base.&quot;
                      </p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Maria Santos</p>
                          <p className="text-sm text-zinc-400">
                            Franchise Owner - Makati City
                          </p>
                        </div>
                        <div className="flex text-[var(--coffee-accent)]">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>

        {/* Franchise Process Steps */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <h3 className="text-2xl mb-4">The Franchise Process</h3>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Our streamlined process is designed to help you launch your
              Preciso franchise efficiently and successfully.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {franchiseSteps.map((step, index) => (
            <ScrollReveal key={step.id} delay={index * 100}>
              <Card className="border-zinc-800 shadow-md hover:shadow-lg transition-shadow bg-zinc-900 h-full card-hover rounded-[20px]">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--coffee-accent)]/20 flex items-center justify-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--coffee-accent)] flex items-center justify-center text-black">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--coffee-accent)] text-black flex items-center justify-center text-xs font-medium">
                      {step.id}
                    </div>
                    <h4 className="font-bold text-white">{step.title}</h4>
                  </div>
                  <p className="text-zinc-300 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-zinc-900 to-black text-white p-8 md:p-12 rounded-[20px] mt-16 shadow-lg relative overflow-hidden border border-zinc-800">
            <div className="absolute right-0 top-0 opacity-10">
              <svg
                width="240"
                height="240"
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
              </svg>
            </div>
            <div className="relative z-10 text-center sm:text-left sm:flex justify-between items-center">
              <div className="mb-6 sm:mb-0">
                <h3 className="text-2xl md:text-3xl font-medium mb-2">
                  Ready to Join the Preciso Family?
                </h3>
                <p className="text-zinc-300 max-w-xl">
                  Take the first step towards owning your own premium coffee
                  shop franchise. Contact our franchise team today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[var(--coffee-accent)] text-black hover:bg-[var(--coffee-accent)]/80 rounded-[20px]"
                >
                  <Calendar className="mr-2 w-4 h-4" />
                  Schedule a meeting
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
