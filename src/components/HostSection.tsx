import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// TODO: Заменить на реальные фото хозяина
import hostPhoto1 from "@/assets/project-1.jpg";
import hostPhoto2 from "@/assets/project-2.jpg";
import hostPhoto3 from "@/assets/project-3.jpg";
import hostPhoto4 from "@/assets/project-4.jpg";

const hostImages = [hostPhoto1, hostPhoto2, hostPhoto3, hostPhoto4];

const HostSection = () => {
  return (
    <section id="host" className="py-32 bg-muted/40">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Carousel */}
            <div>
              <Carousel className="w-full max-w-lg mx-auto">
                <CarouselContent>
                  {hostImages.map((img, i) => (
                    <CarouselItem key={i}>
                      <Card className="border-0 bg-transparent">
                        <CardContent className="p-0">
                          <div className="warm-image shadow-architectural rounded-3xl overflow-hidden">
                            <img
                              src={img}
                              alt={`Фото дома — ${i + 1}`}
                              className="w-full aspect-[4/5] object-cover"
                              loading="lazy"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-3" />
                <CarouselNext className="right-3" />
              </Carousel>
            </div>

            {/* Story */}
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">
                О ХОЗЯИНЕ
              </h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Своими руками
                <br />
                для своих
              </h3>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Этот дом я строил для себя. Выбирал место несколько лет —
                  хотелось, чтобы рядом была река, лес и при этом до
                  цивилизации не слишком далеко. Курджиново нашёл случайно,
                  влюбился в тишину и виды. Дороги сюда нет почти — и в этом
                  главное счастье.
                </p>
                <p>
                  Я сам участвовал в каждом этапе: от заливки фундамента до
                  последнего гвоздя в отделке. Каждое дерево здесь —
                  с историей. Когда дом был готов, понял, что хочу делиться
                  этим местом с теми, кто тоже ищет тишину.
                </p>
                <p>
                  Я не называю это бизнесом. Скорее — приглашением. Если вам
                  откликается то, о чём я рассказываю, — приезжайте. Будете
                  как дома. А я покажу вам лучшие места в округе, о которых
                  не пишут в путеводителях.
                </p>
              </div>

              <div className="mt-10 p-6 rounded-2xl border border-border/60 bg-background">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-minimal text-secondary text-sm mb-1">
                      ЛЕТ ОПЫТА
                    </div>
                    <div className="text-3xl font-light text-architectural">
                      7+
                    </div>
                  </div>
                  <div>
                    <div className="text-minimal text-secondary text-sm mb-1">
                      ДОВОЛЬНЫХ ГОСТЕЙ
                    </div>
                    <div className="text-3xl font-light text-architectural">
                      200+
                    </div>
                  </div>
                  <div>
                    <div className="text-minimal text-secondary text-sm mb-1">
                      ВЫСОТА НАД МОРЕМ
                    </div>
                    <div className="text-3xl font-light text-architectural">
                      820 м
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostSection;
