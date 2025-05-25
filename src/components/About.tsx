
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-zinc-200 bg-zinc-50 text-zinc-800 hover:bg-zinc-100">Our Story</Badge>
          <h2 className="text-3xl md:text-4xl mb-6">Precision In Every Cup</h2>
          <p className="text-zinc-600">
            Founded in 2018, preciso was born from a passion for excellence in coffee. 
            Our name, meaning "precise" in Portuguese, embodies our commitment to precision in every aspect of coffee making.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:translate-y-[-8px]">
            <div className="h-64 relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Coffee beans being carefully selected" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-3">Carefully Sourced Beans</h3>
              <p className="text-zinc-600">
                We travel the world to find the best single-origin beans, working directly with farmers who share our values of sustainability and quality.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:translate-y-[-8px]">
            <div className="h-64 relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Barista perfecting a pour-over" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-3">Artisan Methods</h3>
              <p className="text-zinc-600">
                Our baristas are trained in the science and art of coffee making, using precise methods to bring out the unique character of each bean.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden md:col-span-2 lg:col-span-1 transition-transform hover:translate-y-[-8px]">
            <div className="h-64 relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Cozy coffee shop interior" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-3">Welcoming Space</h3>
              <p className="text-zinc-600">
                Our cafés are designed to be comfortable spaces where ideas flow freely and communities gather, reflecting our belief that great coffee brings people together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
