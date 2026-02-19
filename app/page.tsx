import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TowingServices from "@/components/TowingServices";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TowingServices />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
