
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-[var(--coffee-cream)]/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-zinc-200 bg-zinc-50 text-zinc-800 hover:bg-zinc-100">Contact Us</Badge>
          <h2 className="text-3xl md:text-4xl mb-6">Get In Touch</h2>
          <p className="text-zinc-600">
            Have questions about our coffee, services, or just want to say hello? 
            We'd love to hear from you. Fill out the form below or use our contact information.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="shadow-md border-0">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl mb-6 font-bold">Send Us a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name">Name</label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject">Subject</label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message here..." 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-[var(--coffee-dark)] hover:bg-black text-white">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="shadow-md border-0">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl mb-6 font-bold">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-[var(--coffee-dark)]/10 mr-4">
                      <MapPin className="h-6 w-6 text-[var(--coffee-dark)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Visit Our Coffee Shop</h4>
                      <p className="text-zinc-600">2464 Royal Ln. Mesa, Angeles City, Pampanga</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-[var(--coffee-dark)]/10 mr-4">
                      <Phone className="h-6 w-6 text-[var(--coffee-dark)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Call Us</h4>
                      <p className="text-zinc-600">(684) 555-0102</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-[var(--coffee-dark)]/10 mr-4">
                      <Mail className="h-6 w-6 text-[var(--coffee-dark)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email Us</h4>
                      <p className="text-zinc-600">hello@precisocoffee.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-[var(--coffee-dark)]/10 mr-4">
                      <Clock className="h-6 w-6 text-[var(--coffee-dark)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Opening Hours</h4>
                      <p className="text-zinc-600">Monday - Sunday: 8:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.941255666383!2d120.7022568766836!3d15.051365165878606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f7007958d8ad%3A0x91ca1e803f04af6b!2sPreciso%20Coffee!5e0!3m2!1sen!2sph!4v1747727102568!5m2!1sen!2sph" 
                width="100%"
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Preciso Coffee Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
