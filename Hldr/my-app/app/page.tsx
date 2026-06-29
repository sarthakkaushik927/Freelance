import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

import GallerySection from "./components/GallerySection";
import ReservationSection from "./components/ReservationSection";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <section id="about">
          <AboutSection />
        </section>

        <section id="gallery">
          <GallerySection />
        </section>
        <ReservationSection />
      </main>
      <Footer />
    </>
  );
}
