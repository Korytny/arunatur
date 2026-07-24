import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { WeatherWidget } from "@/components/WeatherWidget";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import HostSection from "@/components/HostSection";
import Pricing from "@/components/Pricing";
import HouseRules from "@/components/HouseRules";
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
      <Portfolio />
      <HostSection />
      <Pricing />
      <HouseRules />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
