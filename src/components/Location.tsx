
import { MapPin, Clock, Phone, Coffee } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function Location() {
  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-zinc-200 bg-zinc-50 text-zinc-800 hover:bg-zinc-100">Our Location</Badge>
          <h2 className="text-3xl md:text-4xl mb-6">Visit Our Coffee Shop</h2>
          <p className="text-zinc-600">
            Located in the heart of downtown, our coffee shop offers a cozy retreat from the bustle of city life.
            Come experience the warmth and precision of Preciso.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Information Cards */}
          <div className="flex flex-col justify-center space-y-6">
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-start">
                <div className="mr-4 bg-[var(--coffee-dark)]/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-[var(--coffee-dark)]" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium">Our Location</h3>
                  <p className="text-zinc-600">
                    2464 Royal Ln. Mesa<br />
                    Angeles City, Pampanga
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-start">
                <div className="mr-4 bg-[var(--coffee-dark)]/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-[var(--coffee-dark)]" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium">Opening Hours</h3>
                  <div className="grid grid-cols-2 gap-x-4 text-zinc-600">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 8:00 PM</span>
                    <span>Saturday</span>
                    <span>8:00 AM - 9:00 PM</span>
                    <span>Sunday</span>
                    <span>8:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-start">
                <div className="mr-4 bg-[var(--coffee-dark)]/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-[var(--coffee-dark)]" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium">Contact Us</h3>
                  <p className="text-zinc-600">
                    Phone: (684) 555-0102<br />
                    Email: hello@precisocoffee.com
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-start">
                <div className="mr-4 bg-[var(--coffee-dark)]/10 p-3 rounded-full">
                  <Coffee className="h-6 w-6 text-[var(--coffee-dark)]" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium">Specialty Coffee</h3>
                  <p className="text-zinc-600">
                    First Specialty Coffee drive-thru in Pampanga, bringing high-quality crafted coffee with convenience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Map Container */}
          <div className="h-full min-h-[500px] rounded-xl overflow-hidden shadow-lg border border-zinc-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.941255666383!2d120.7022568766836!3d15.051365165878606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f7007958d8ad%3A0x91ca1e803f04af6b!2sPreciso%20Coffee!5e0!3m2!1sen!2sph!4v1747727102568!5m2!1sen!2sph" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Preciso Coffee Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
