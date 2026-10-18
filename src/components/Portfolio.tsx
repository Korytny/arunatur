import { useState, useCallback, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import banya from "@/assets/banya.jpg";
import banya1 from "@/assets/banya1.jpg";
import banya2 from "@/assets/banya2.jpg";
import banya3 from "@/assets/banya3.jpg";
import banya4 from "@/assets/banya4.jpg";
import yoga from "@/assets/yoga.jpg";
import yoga1 from "@/assets/yoga1.jpg";
import yoga2 from "@/assets/yoga2.jpg";
import restImage from "@/assets/rest.jpg";
import rest1 from "@/assets/rest1.jpg";
import rest2 from "@/assets/rest2.jpg";
import rest3 from "@/assets/rest3.jpg";
import rest4 from "@/assets/rest4.jpg";
import rest5 from "@/assets/rest5.jpg";
import kitchen from "@/assets/kitchen.jpg";
import kitchen1 from "@/assets/kitchen1.jpg";
import kitchen2 from "@/assets/kitchen2.jpg";
import san from "@/assets/san.jpg";
import san1 from "@/assets/san1.jpg";
import san3 from "@/assets/san3.jpg";
import san4 from "@/assets/san4.jpg";
import san5 from "@/assets/san5.jpg";
import pechImage from "@/assets/pech.jpg";

const banyaSlides = [
  { src: banya, alt: "Баня на дровах - экстерьер" },
  { src: banya1, alt: "Баня изнутри - парная" },
  { src: banya2, alt: "Баня - зона отдыха" },
  { src: banya3, alt: "Баня - детали интерьера" },
  { src: banya4, alt: "Баня - панорама территории" },
];

const yogaSlides = [
  { src: yoga, alt: "Йога-холл - общий вид" },
  { src: yoga1, alt: "Йога-холл - пространство для практик" },
  { src: yoga2, alt: "Йога-холл - вид на рассвет" },
];

const restSlides = [
  { src: restImage, alt: "Комната для гостей - общая планировка" },
  { src: rest1, alt: "Спальная комната - ортопедический матрас" },
  { src: rest2, alt: "Комната - хлопковое бельё и шторы" },
  { src: rest3, alt: "Комната для отдыха - комфорт и уют" },
  { src: rest4, alt: "Комната - дополнительное пространство" },
  { src: rest5, alt: "Комната - полная темнота для сна" },
];

const kitchenSlides = [
  { src: kitchen, alt: "Кухня-гостиная - общий вид" },
  { src: kitchen1, alt: "Кухня - рабочая зона с посудой" },
  { src: kitchen2, alt: "Гостиная - зона для отдыха компании" },
];

const sanSlides = [
  { src: san, alt: "Современная сантехника - общий вид" },
  { src: san1, alt: "Ванная комната - детали интерьера" },
  { src: san3, alt: "Санузел - современное оформление" },
  { src: san4, alt: "Ванная - зона релаксации" },
  { src: san5, alt: "Сантехника - качество и комфорт" },
];

const Portfolio = () => {
  // Баня - карусель
  const [banyaApi, setBanyaApi] = useState<CarouselApi>();
  const [banyaCurrent, setBanyaCurrent] = useState(0);
  const banyaApiRef = useRef<CarouselApi | null>(null);

  // Йога-холл - карусель
  const [yogaApi, setYogaApi] = useState<CarouselApi>();
  const [yogaCurrent, setYogaCurrent] = useState(0);
  const yogaApiRef = useRef<CarouselApi | null>(null);

  // Комнаты - карусель
  const [restApi, setRestApi] = useState<CarouselApi>();
  const [restCurrent, setRestCurrent] = useState(0);
  const restApiRef = useRef<CarouselApi | null>(null);

  // Кухня-гостиная - карусель
  const [kitchenApi, setKitchenApi] = useState<CarouselApi>();
  const [kitchenCurrent, setKitchenCurrent] = useState(0);
  const kitchenApiRef = useRef<CarouselApi | null>(null);

  // Современная сантехника - карусель
  const [sanApi, setSanApi] = useState<CarouselApi>();
  const [sanCurrent, setSanCurrent] = useState(0);
  const sanApiRef = useRef<CarouselApi | null>(null);

  // Отслеживание слайда бани
  useEffect(() => {
    if (!banyaApi) return;
    banyaApiRef.current = banyaApi;
    
    const onSelect = () => setBanyaCurrent(banyaApi.selectedScrollSnap());
    banyaApi.on("select", onSelect);
    onSelect();

    return () => banyaApi.off("select", onSelect);
  }, [banyaApi]);

  // Отслеживание слайда йоги
  useEffect(() => {
    if (!yogaApi) return;
    yogaApiRef.current = yogaApi;
    
    const onSelect = () => setYogaCurrent(yogaApi.selectedScrollSnap());
    yogaApi.on("select", onSelect);
    onSelect();

    return () => yogaApi.off("select", onSelect);
  }, [yogaApi]);

  // Отслеживание слайда комнат
  useEffect(() => {
    if (!restApi) return;
    restApiRef.current = restApi;
    
    const onSelect = () => setRestCurrent(restApi.selectedScrollSnap());
    restApi.on("select", onSelect);
    onSelect();

    return () => restApi.off("select", onSelect);
  }, [restApi]);

  // Отслеживание слайда кухни
  useEffect(() => {
    if (!kitchenApi) return;
    kitchenApiRef.current = kitchenApi;
    
    const onSelect = () => setKitchenCurrent(kitchenApi.selectedScrollSnap());
    kitchenApi.on("select", onSelect);
    onSelect();

    return () => kitchenApi.off("select", onSelect);
  }, [kitchenApi]);

  // Отслеживание слайда сантехники
  useEffect(() => {
    if (!sanApi) return;
    sanApiRef.current = sanApi;
    
    const onSelect = () => setSanCurrent(sanApi.selectedScrollSnap());
    sanApi.on("select", onSelect);
    onSelect();

    return () => sanApi.off("select", onSelect);
  }, [sanApi]);

  const scrollToBanyaSlide = useCallback(
    (index: number) => banyaApiRef.current?.scrollTo(index),
    []
  );

  const scrollToYogaSlide = useCallback(
    (index: number) => yogaApiRef.current?.scrollTo(index),
    []
  );

  const scrollToRestSlide = useCallback(
    (index: number) => restApiRef.current?.scrollTo(index),
    []
  );

  const scrollToKitchenSlide = useCallback(
    (index: number) => kitchenApiRef.current?.scrollTo(index),
    []
  );

  const scrollToSanSlide = useCallback(
    (index: number) => sanApiRef.current?.scrollTo(index),
    []
  );

  const zones = [
    {
      slides: banyaSlides,
      title: "БАНЯ НА ДРОВАХ",
      meta: "ПАРНАЯ · 6 ЧЕЛОВЕК",
      description:
        "Пар с можжевельником, веники из местных трав, печь на дровах. Прогревает до самых костей после горного воздуха.",
      hasCarousel: true,
      carouselType: "banya" as const,
    },
    {
      slides: yogaSlides,
      title: "ЙОГА-ХОЛЛ",
      meta: "40 М²",
      description:
        "Тёплый пол, маты, вид на рассвет над хребтом. Проводим утренние практики — приходите со своим ковриком или берите наш.",
      hasCarousel: true,
      carouselType: "yoga" as const,
    },
    {
      slides: restSlides,
      title: "5 ОТДЕЛЬНЫХ КОМНАТ",
      meta: "3 КОМНАТЫ · ТЕМНОТА",
      description:
        "Ортопедические матрасы, хлопковое бельё, плотные шторы для полной темноты. Сон, после которого хочется жить.",
      hasCarousel: true,
      carouselType: "rest" as const,
    },
    {
      slides: kitchenSlides,
      title: "КУХНЯ-ГОСТИНАЯ",
      meta: "ПОЛНЫЙ ФАРТУК · ПОСУДА",
      description:
        "Уютная кухня-гостиная, где можно готовить всей компанией. Всё необходимое для домашних ужинов — от сковородок до специй.",
      hasCarousel: true,
      carouselType: "kitchen" as const,
    },
    {
      slides: sanSlides,
      title: "СОВРЕМЕННАЯ САНТЕХНИКА",
      meta: "КОМФОРТ · КАЧЕСТВО",
      description:
        "Стильные душевые кабины и туалеты с современной сантехникой. Всё продумано для вашего комфорта и релаксации после активного дня.",
      hasCarousel: true,
      carouselType: "san" as const,
    },
    {
      image: pechImage,
      title: "ПЕЧЬ НА ДРОВАХ",
      meta: "ТЕПЛО · УЮТ · ПРОСТОР",
      description:
        "Настоящая дровяная печь — сердце дома. Она греет не только воздух, но и душу: тепло идёт отовсюду, уютно потрескивают дрова, а вокруг столько места, что хватит всем.",
      hasCarousel: false,
    },
  ];

  return (
    <section id="zones" className="py-32 bg-background bg-section-2">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">ТЕРРИТОРИЯ ОТДЫХА</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Зоны дома
            </h3>
          </div>

          <div className="space-y-32">
            {zones.map((z, i) => (
              <div
                key={z.title}
                className={`group grid md:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                {z.hasCarousel ? (
                  // Карусель (баня, йога или комнаты)
                  <div className="warm-image shadow-architectural rounded-xl overflow-hidden">
                    <Carousel
                      opts={{ loop: true, align: "center" }}
                      plugins={[
                        Autoplay({
                          delay: 5000,
                          stopOnInteraction: true,
                          stopOnMouseEnter: true,
                        }),
                      ]}
                      setApi={
                        z.carouselType === "banya" ? setBanyaApi :
                        z.carouselType === "yoga" ? setYogaApi :
                        z.carouselType === "rest" ? setRestApi :
                        z.carouselType === "kitchen" ? setKitchenApi :
                        setSanApi
                      }
                    >
                      <CarouselContent>
                        {z.slides?.map((slide) => (
                          <CarouselItem key={slide.alt}>
                            <div className="h-[60vh] relative">
                              <img
                                src={slide.src}
                                alt={slide.alt}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>

                      <CarouselPrevious className="left-4 bg-background/70 hover:bg-background border-0 shadow-md backdrop-blur-sm" />
                      <CarouselNext className="right-4 bg-background/70 hover:bg-background border-0 shadow-md backdrop-blur-sm" />

                      {/* Dot-индикаторы */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                        {z.slides?.map((_, index) => {
                          const currentIndex = 
                            z.carouselType === "banya" ? banyaCurrent :
                            z.carouselType === "yoga" ? yogaCurrent :
                            z.carouselType === "rest" ? restCurrent :
                            z.carouselType === "kitchen" ? kitchenCurrent : sanCurrent;
                          
                          const scrollToSlide = 
                            z.carouselType === "banya" ? scrollToBanyaSlide :
                            z.carouselType === "yoga" ? scrollToYogaSlide :
                            z.carouselType === "rest" ? scrollToRestSlide :
                            z.carouselType === "kitchen" ? scrollToKitchenSlide : scrollToSanSlide;

                          return (
                            <button
                              key={index}
                              onClick={() => scrollToSlide(index)}
                              className={`transition-all duration-300 rounded-full ${
                                currentIndex === index
                                  ? "w-8 h-2.5 bg-white shadow-md"
                                  : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
                              }`}
                              aria-label={`Слайд ${index + 1}`}
                            />
                          );
                        })}
                      </div>
                    </Carousel>
                  </div>
                ) : (
                  // Обычное изображение
                  <div className="warm-image shadow-architectural">
                    <img
                      src={z.image}
                      alt={z.title}
                      loading="lazy"
                      className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                )}

                <div className="space-y-6">
                  <span className="text-minimal text-secondary">{z.meta}</span>
                  <h4 className="text-3xl md:text-5xl font-light text-architectural">
                    {z.title}
                  </h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {z.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
