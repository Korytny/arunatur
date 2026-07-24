import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage from "@/assets/hero-architecture.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const slides = [
  {
    src: heroImage,
    alt: "Дом у леса — вид с веранды",
  },
  {
    src: project1,
    alt: "Баня на дровах",
  },
  {
    src: project2,
    alt: "Йога-холл с панорамой",
  },
  {
    src: project3,
    alt: "Купель под открытым небом",
  },
];

const HostCarousel = () => {
  return (
    <section id="host" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Карусель */}
            <div className="warm-image shadow-architectural">
              <Carousel opts={{ loop: true, align: "center" }}>
                <CarouselContent>
                  {slides.map((slide) => (
                    <CarouselItem key={slide.alt}>
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        loading="lazy"
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-background/70 hover:bg-background" />
                <CarouselNext className="right-4 bg-background/70 hover:bg-background" />
              </Carousel>
            </div>

            {/* Текст о хозяине */}
            <div className="space-y-8">
              <div>
                <h2 className="text-minimal text-muted-foreground mb-4">
                  ХОЗЯИН
                </h2>
                <h3 className="text-4xl md:text-6xl font-light text-architectural">
                  Евгений
                </h3>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Я коренной житель Курджиново. Этот дом строил для себя —
                  чтобы было место, куда хочется возвращаться из любой поездки.
                  Теперь делюсь им с теми, кто ищет тишины и настоящего
                  отдыха в горах.
                </p>
                <p>
                  Каждая деталь здесь — от расположения бани до выбора матрасов —
                  продумана так, чтобы вы ни о чём не думали, а просто
                  отдыхали. Я лично встречаю гостей, рассказываю про маршруты,
                  топлю баню и слежу, чтобы всё было как надо.
                </p>
                <p>
                  Если захотите — покажу водопады и дольмены, которых нет на
                  картах. Или оставлю вас в покое — и это тоже правильный
                  выбор. Приезжайте как к другу.
                </p>
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground border-t border-border pt-6">
                <span className="text-minimal text-secondary">СВЯЗАТЬСЯ</span>
                <a
                  href="tel:+89150255285"
                  className="hover:text-accent transition-colors"
                >
                  +8-915-025-52-85
                </a>
                <span className="text-border">·</span>
                <a
                  href="mailto:hello@аруна-тур.рф"
                  className="hover:text-accent transition-colors"
                >
                  hello@аруна-тур.рф
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostCarousel;
