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
import host1 from "@/assets/host1.jpg";
import host2 from "@/assets/host2.jpg";
import host3 from "@/assets/host3.jpg";

const slides = [
  {
    src: host1,
    alt: "Алексей Кривошапов — хозяин гостевого дома",
  },
  {
    src: host2,
    alt: "Гостевой дом в Курджиново",
  },
  {
    src: host3,
    alt: "Семья и природа КЧР",
  },
];

const HostCarousel = ({ compact }: { compact?: boolean }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // IntersectionObserver для анимации появления
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

  // Отслеживание текущего слайда для индикаторов
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    // начальное значение
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
      id="host"
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-background via-muted/20 to-muted/30 bg-section-2"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`grid md:grid-cols-2 gap-16 md:gap-24 items-center transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }${compact ? " md:grid-cols-1 max-w-7xl mx-auto" : ""}`}
          >
            {/* Карусель */}
            <div className="warm-image shadow-architectural rounded-2xl overflow-hidden order-1 md:order-1 w-full">
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
                      <div className={`relative ${compact ? "aspect-[4/3]" : "aspect-[4/3] md:aspect-[3/2]"}`}>
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

                <CarouselPrevious className="left-4 bg-background/70 hover:bg-background border-0 shadow-md backdrop-blur-sm" />
                <CarouselNext className="right-4 bg-background/70 hover:bg-background border-0 shadow-md backdrop-blur-sm" />

                {/* Dot-индикаторы */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollTo(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === current
                          ? "w-8 h-2.5 bg-white shadow-md"
                          : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Слайд ${index + 1} из ${slides.length}`}
                    />
                  ))}
                </div>
              </Carousel>
            </div>

            {!compact && (
            /* Текст о хозяине */
            <div className="space-y-8">
              <div>
                <h2 className="text-minimal text-muted-foreground mb-4">
                  ХОЗЯИН
                </h2>
                <h3 className="text-4xl md:text-6xl font-light text-architectural">
                  Алексей
                </h3>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Всем добра! Меня зовут Кривошапов Алексей, и я рад
                  приветствовать вас на странице нашего гостевого дома в
                  предгорьях Биосферного заповедника. Расскажу немного о нашей
                  большой и дружной семье и себе. Сейчас мы воспитываем 6
                  мальчиков и 1 принцессу — и в такой компании не так просто
                  куда-то поехать)) Отчасти поэтому мы и приобрели дом в селе
                  Курджиново.
                </p>
                <a
                  href="/host"
                  className="inline-block text-minimal text-secondary hover:text-accent transition-colors border-b border-secondary/30 hover:border-accent/30 pb-0.5"
                >
                  Читать полностью →
                </a>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostCarousel;
