import { MainLayout } from "./components/layout/MainLayout";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Menu } from "./components/Menu";
import { Gallery } from "./components/Gallery";
import { CoffeeEducation } from "./components/CoffeeEducation";
import { VideoShowcase } from "./components/VideoShowcase";
import { Location } from "./components/Location";
import { Franchise } from "./components/Franchise";
import { CustomerMoments } from "./components/CustomerMoments";
import { FloatingFAQButton } from "./components/FAQs";
// import { useEffect } from "react";

export default function App() {
  // useEffect(() => {
  //   const testBooking = async () => {
  //      const res = await fetch("https://script.google.com/macros/s/AKfycbwtyZBYfjd4DFR3UwBQEF1_BovNxaBvpS4PBwQhy-f_f_VUq5uwN-7sIRSptbyQ7IdDzQ/exec", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         title: "Consultation with Jayvee",
  //         startTime: "2025-05-26T10:00:00",
  //         endTime: "2025-05-26T11:00:00",
  //         description: "Zoom link will be sent after confirmation.",
  //         email: "zbenedictjhon97@gmail.com"
  //       }),
  //     });
  //     console.log(res);
  //   }
  //   testBooking()
  // }, [])
  return (
    <MainLayout>
      {/* Hero Section */}
      <section id="home" className="relative z-10">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10">
        <About />
      </section>

      {/* Menu Section */}
      <section id="menu" className="relative z-10">
        <Menu />
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative z-10">
        <Gallery />
      </section>

      {/* Customer Moments Section */}
      <section id="moments" className="relative z-10">
        <CustomerMoments />
      </section>

      {/* Coffee Education Section */}
      <section id="education" className="relative z-20">
        <CoffeeEducation />
      </section>

      {/* Video Showcase */}
      <section id="showcase" className="relative z-10">
        <VideoShowcase />
      </section>

      {/* Franchise Section */}
      <section id="franchise" className="relative z-10">
        <Franchise />
      </section>

      {/* Location Section */}
      <section id="location" className="relative z-10">
        <Location />
      </section>

      {/* Floating FAQ Button */}
      <FloatingFAQButton />
    </MainLayout>
  );
}
