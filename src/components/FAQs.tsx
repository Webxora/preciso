
import { Coffee, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "./ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { useState } from "react";

// FAQ data
const faqData = [
  {
    question: "What are your operating hours?",
    answer: "Our coffee shop is open daily from 7:00 AM to 9:00 PM on weekdays, and 8:00 AM to 10:00 PM on weekends."
  },
  {
    question: "Do you offer wifi?",
    answer: "Yes, we provide complimentary high-speed wifi for all our customers. Please ask our staff for the current password."
  },
  {
    question: "Are your coffee beans ethically sourced?",
    answer: "Absolutely! We take pride in sourcing all our coffee beans from ethical farms with fair trade practices. Our beans are sustainably grown and harvested with care for both the environment and the farmers."
  },
  {
    question: "Do you have dairy alternatives?",
    answer: "We offer a variety of dairy alternatives including oat milk, almond milk, soy milk, and coconut milk at no additional charge."
  },
  {
    question: "Do you have a loyalty program?",
    answer: "Yes, we have a loyalty program where you earn points for every purchase. Download our app or ask our baristas for a physical loyalty card to start earning rewards today!"
  },
  {
    question: "Do you offer catering services?",
    answer: "We provide catering services for events and meetings. Please contact us at least 48 hours in advance to discuss your requirements and place an order."
  },
  {
    question: "Are your food items made in-house?",
    answer: "Most of our pastries and food items are baked fresh in-house daily. We also partner with local bakeries for some specialty items to support local businesses."
  }
];

export function FloatingFAQButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 rounded-full bg-white p-1.5 shadow-lg">
        <button
          onClick={() => setOpen(true)}
          className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-black/90 transition-all duration-300 hover:scale-105 focus:outline-none"
          aria-label="Open FAQs"
        >
          <Coffee className="w-6 h-6" />
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden rounded-2xl">
          {/* Add explicit close button with white color */}
          <DialogClose className="absolute top-4 right-4 rounded-full p-1.5 text-white hover:bg-white/10 focus:outline-none z-50">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
          
          <div className="bg-black text-white p-6">
            <DialogHeader className="pb-2">
              <div className="flex items-center">
                <DialogTitle className="text-2xl flex items-center gap-2">
                  <Coffee className="w-6 h-6" /> Frequently Asked Questions
                </DialogTitle>
              </div>
              <DialogDescription className="text-[var(--coffee-accent)]">
                Find answers to common questions about Preciso Coffee Shop.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="max-h-[60vh] overflow-y-auto p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="p-6 border-t">
            <p className="text-sm text-muted-foreground">
              Have another question? Feel free to <a href="#contact" className="text-[var(--coffee-dark)] hover:underline" onClick={() => setOpen(false)}>contact us</a> and we'll get back to you as soon as possible.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
