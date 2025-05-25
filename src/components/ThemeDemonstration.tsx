
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ThemeSwitch } from "./ThemeSwitch";
import { Badge } from "./ui/badge";
import { Coffee, Star } from "lucide-react";

export function ThemeDemonstration() {
  return (
    <div className="p-8 w-full max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold text-center">Customize Your Experience</h2>
        <p className="text-center text-muted-foreground max-w-md">
          Choose your preferred visual theme for browsing our coffee selection.
        </p>
        
        <div className="my-4">
          <ThemeSwitch />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="card-hover overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <CardTitle>Specialty Espresso</CardTitle>
              <Badge className="bg-[var(--coffee-dark)] text-white">Popular</Badge>
            </div>
            <CardDescription>Single-origin, ethically sourced</CardDescription>
          </CardHeader>
          <CardContent className="pb-0">
            <div className="aspect-video rounded-md overflow-hidden bg-muted mb-4">
              <img 
                src="https://images.unsplash.com/photo-1510591509098-f4b5d5d3b8e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Espresso coffee"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className={i < 4 ? "fill-[var(--coffee-medium)] text-[var(--coffee-medium)]" : "text-muted"} />
              ))}
              <span className="text-sm text-muted-foreground ml-2">4.0 (126 reviews)</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Our signature espresso blend features notes of dark chocolate, caramel, and a hint of citrus.
            </p>
          </CardContent>
          <CardFooter className="pt-4 flex justify-between items-center">
            <span className="text-lg font-bold">₱175</span>
            <Button className="rounded-full" size="sm">
              <Coffee className="mr-2 h-4 w-4" />
              Order Now
            </Button>
          </CardFooter>
        </Card>
        
        <div className="space-y-6">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Personalize Your Experience</CardTitle>
              <CardDescription>Toggle between themes to find your perfect vibe</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Sun className="mr-2 h-4 w-4 text-[var(--coffee-medium)]" />
                  <span><strong>Light Mode:</strong> Clean and bright, perfect for daytime browsing</span>
                </li>
                <li className="flex items-center">
                  <Coffee className="mr-2 h-4 w-4 text-[var(--coffee-medium)]" />
                  <span><strong>Coffee Mode:</strong> Warm coffee tones for the true enthusiast</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Remember My Preference
              </Button>
            </CardFooter>
          </Card>
          
          <div className="p-4 rounded-lg border border-border bg-card">
            <p className="text-sm italic text-muted-foreground">
              "The theme switcher is just one example of how we're enhancing your experience at Preciso. We believe details matter, just like in our coffee-making process."
            </p>
            <div className="mt-2 flex items-center">
              <div className="h-8 w-8 rounded-full bg-[var(--coffee-dark)] flex items-center justify-center text-white">P</div>
              <div className="ml-2">
                <p className="text-sm font-medium">Preciso Coffee</p>
                <p className="text-xs text-muted-foreground">Crafting experiences since 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sun(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}
