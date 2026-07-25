const tariffs = [
  {
    id: "banya",
    name: "БАНЯ",
    price: "1 500",
    unit: "₽ / час",
    tagline: "Пар, веники и звёзды",
    features: [
      "Топка на дровах — жар до 90°C",
      "Веники из местных трав",
      "Купель с родниковой водой",
      "Чайничек и мята",
      "Компания до 6 человек",
    ],
    accent: false,
  },
  {
    id: "dom",
    name: "ДОМ",
    price: "2 500",
    unit: "₽ / сутки",
    tagline: "Сруб у леса целиком",
    features: [
      "Дом до 8 гостей",
      "Wi-Fi, посуда, бельё",
      "Кухня-гостиная с печью",
      "Парковка во дворе",
      "Помощь хозяина 24/7",
    ],
    accent: true,
  },
  {
    id: "excursions",
    name: "ЭКСКУРСИИ",
    price: "от 3 000",
    unit: "₽ / человек",
    tagline: "Горы, водопады, дольмены",
    features: [
      "Пешие маршруты с гидом",
      "Водопады и пещеры",
      "Трансфер до старта",
      "Индивидуальный график",
      "Дети до 12 лет — 50%",
    ],
    accent: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-background bg-section-3">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-minimal text-muted-foreground mb-4">ТАРИФЫ</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Баня · Дом · Экскурсии
            </h3>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Выбирайте, что по душе, или комбинируйте. Дети до 5 лет — бесплатно.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tariffs.map((t) => {
              return (
                <div
                  key={t.id}
                  className={`rounded-3xl p-8 md:p-10 border text-center transition-all duration-300 hover:shadow-elegant ${
                    t.accent
                      ? "bg-primary text-primary-foreground border-primary scale-[1.02]"
                      : "bg-background border-border"
                  }`}
                >
                  <div className="mb-6">
                    <h4 className="text-2xl font-light">{t.name}</h4>
                    <p
                      className={`text-sm mt-2 ${
                        t.accent
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      {t.tagline}
                    </p>
                  </div>

                  <div className="mb-6">
                    <span className="text-5xl font-light">{t.price}</span>
                    <span
                      className={`block text-sm mt-1 ${
                        t.accent
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {t.unit}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {t.features.map((f) => (
                      <li
                        key={f}
                        className={`text-sm ${
                          t.accent
                            ? "text-primary-foreground/80"
                            : "text-muted-foreground"
                        }`}
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
