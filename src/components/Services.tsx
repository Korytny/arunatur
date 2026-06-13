const Services = () => {
  const items = [
    {
      number: "01",
      title: "СВОЙ СРУБ И ТИШИНА",
      description:
        "Никаких соседей за стеной. Только лес, горы и звуки реки. Дом стоит обособленно — вы хозяева территории.",
    },
    {
      number: "02",
      title: "КУПЕЛЬ С РОДНИКОВОЙ ВОДОЙ",
      description:
        "Круглый год для бодрости и контраста после парной. Закаты, звёзды и заряд энергии под открытым небом.",
    },
    {
      number: "03",
      title: "БАНЯ НА ДРОВАХ",
      description:
        "Жаркий пар после треккинга, веники из местных трав, аромат можжевельника и потрескивание печи.",
    },
    {
      number: "04",
      title: "ВОДОПАДЫ И ДОЛЬМЕНЫ РЯДОМ",
      description:
        "15 минут до природных мест силы. Готовые карты маршрутов и советы от хозяина — куда сходить и где поесть.",
    },
  ];

  return (
    <section id="advantages" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">ПОЧЕМУ ЗДЕСЬ</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Почему выбирают
              <br />
              этот дом
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {items.map((s) => (
              <div
                key={s.number}
                className="group p-8 rounded-3xl bg-muted/40 hover:bg-muted/70 transition-colors duration-500 shadow-elegant"
              >
                <div className="flex items-start space-x-6">
                  <span className="text-minimal text-secondary font-medium">
                    {s.number}
                  </span>
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
