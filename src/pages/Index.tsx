import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { WeatherWidget } from "@/components/WeatherWidget";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
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
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
