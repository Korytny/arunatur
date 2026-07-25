import { useCallback, useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import mainImage from "@/assets/main.jpg";
import main2Image from "@/assets/main2.jpg";
import main3Image from "@/assets/main3.jpg";
import main4Image from "@/assets/main4.jpg";
import main5Image from "@/assets/main5.jpg";
import main6Image from "@/assets/main6.jpg";
import main7Image from "@/assets/main7.jpg";
import main8Image from "@/assets/main8.jpg";
import main9Image from "@/assets/main9.jpg";
import main10Image from "@/assets/main10.jpg";
import main11Image from "@/assets/main11.jpg";

const slides = [
  { src: mainImage, alt: "Гостевой дом ..." },
  { src: main2Image, alt: "Гостевой дом Аруна-Тур — рассветы" },
  { src: main3Image, alt: "Гостевой дом Аруна-Тур — природа" },
  { src: main4Image, alt: "Гостевой дом Аруна-Тур — 4" },
  { src: main5Image, alt: "Гостевой дом Аруна-Тур — 5" },
  { src: main6Image, alt: "Гостевой дом Аруна-Тур — 6" },
  { src: main7Image, alt: "Гостевой дом Аруна-Тур — 7" },
  { src: main8Image, alt: "Гостевой дом Аруна-Тур — 8" },
  { src: main9Image, alt: "Гостевой дом Аруна-Тур — 9" },
  { src: main10Image, alt: "Гостевой дом Аруна-Тур — 10" },
  { src: main11Image, alt: "Гостевой дом Аруна-Тур — 11" },
];

const AestheticCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section
      id="aesthetic"
      ref={sectionRef}
      className="py-32 bg-muted/30 bg-section-4"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-minimal text-muted-foreground mb-4">
                ЭСТЕТИЧЕСКИЙ ВОСТОРГ
              </h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">
                Видели бы вы этот рассвет
              </h3>
            </div>

            <div className="warm-image shadow-architectural rounded-3xl overflow-hidden max-w-5xl mx-auto">
              <Carousel
                opts={{ loop: true, align: "center" }}
                plugins={[
                  Autoplay({
                    delay: 5000,
                    stopOnInteraction: true,
                    stopOnMouseEnter: true,
                  }),
                ]}
                setApi={setApi}
              >
                <CarouselContent>
                  {slides.map((slide, index) => (
                    <CarouselItem key={slide.alt}>
                      <div className="aspect-[16/9] relative">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          loading={index === 0 ? "eager" : "lazy"}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="left-6 bg-background/70 hover:bg-background border-0 shadow-md backdrop-blur-sm h-12 w-12" />
                <CarouselNext className="right-6 bg-background/70 hover:bg-background border-0 shadow-md backdrop-blur-sm h-12 w-12" />

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollTo(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === current
                          ? "w-10 h-3 bg-white shadow-md"
                          : "w-3 h-3 bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Слайд ${index + 1} из ${slides.length}`}
                    />
                  ))}
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AestheticCarousel;
