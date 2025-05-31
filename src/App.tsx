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

export default function App() {
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
