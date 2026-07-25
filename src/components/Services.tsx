import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import banya from "@/assets/banya.jpg";
import routes1 from "@/assets/routes1.jpg";

const items = [
  {
    imgUrl: project1,
    title: "СВОЙ СРУБ И ТИШИНА",
    description:
      "Никаких соседей за стеной. Только лес, горы и звуки реки. Дом стоит обособленно — вы хозяева территории.",
  },
  {
    imgUrl: project2,
    title: "КУПЕЛЬ С РОДНИКОВОЙ ВОДОЙ",
    description:
      "Круглый год для бодрости и контраста после парной. Закаты, звёзды и заряд энергии под открытым небом.",
  },
  {
    imgUrl: banya,
    title: "БАНЯ НА ДРОВАХ",
    description:
      "Жаркий пар после треккинга, веники из местных трав, аромат можжевельника и потрескивание печи.",
  },
  {
    imgUrl: routes1,
    title: "ВОДОПАДЫ И ДОЛЬМЕНЫ РЯДОМ",
    description:
      "15 минут до природных мест силы. Готовые карты маршрутов и советы от хозяина — куда сходить и где поесть.",
  },
];

const Services = () => {
  return (
    <section id="advantages" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">ПОЧЕМУ ЗДЕСЬ</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Почему выбирают этот дом
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {items.map((s) => (
              <div
                key={s.title}
                className="group p-8 rounded-3xl bg-muted/40 hover:bg-muted/70 transition-colors duration-500 shadow-elegant"
              >
                <div className="flex items-center gap-8">
                  <div className="shrink-0 w-[160px] h-[160px] rounded-xl overflow-hidden">
                    <img
                      src={s.imgUrl}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-light mb-4 text-architectural">
                      {s.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
