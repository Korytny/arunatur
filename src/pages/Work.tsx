import Navigation from "@/components/Navigation";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-10">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light text-architectural mb-6">
              Зоны дома
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Каждый уголок дома сделан для отдыха: баня, йога-холл, спальни
              для глубокого сна и купель под звёздами.
            </p>
          </div>
        </div>
      </section>
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Work;
