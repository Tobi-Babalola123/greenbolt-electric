import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import TrustBar from "@/components/sections/TrustBar";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import Contact from "@/components/sections/Contact";
export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <WhyChooseUs />
      <Gallery />
      <Process />
      <Testimonials />
      <FinalCTA />
      <Contact />
      <Footer />
    </>
  );
}
