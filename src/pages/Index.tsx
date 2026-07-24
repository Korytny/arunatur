import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { WeatherWidget } from "@/components/WeatherWidget";
import Services from "@/components/Services";
import About from "@/components/About";
import HostCarousel from "@/components/HostCarousel";
import HouseRules from "@/components/HouseRules";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WeatherWidget />
      <Services />
      <About />
      <HostCarousel />
      <HouseRules />
      <Portfolio />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
