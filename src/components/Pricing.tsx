import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tariffs = [
  {
    id: "econom",
    name: "Эконом",
    price: "5 500",
    tagline: "Только проживание",
    features: [
      "Дом целиком до 6 гостей",
      "Баня на дровах (по записи)",
      "Wi-Fi, посуда, постельное бельё",
      "Парковка во дворе",
    ],
    accent: false,
  },
  {
    id: "active",
    name: "Актив",
    price: "8 900",
    tagline: "Проживание + экскурсии",
    features: [
      "Всё из тарифа «Эконом»",
      "Пешие маршруты с гидом",
      "Поездка к водопадам и пещерам",
      "Трансфер до точек старта",
    ],
    accent: true,
  },
  {
    id: "premium",
    name: "Премиум",
    price: "13 500",
    tagline: "Проживание, экскурсии и питание",
    features: [
      "Всё из тарифа «Актив»",
      "Завтраки, обеды, ужины",
      "Домашняя кухня и аджика",
      "Встреча в Мин.Водах",
    ],
    accent: false,
  },
];

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-minimal text-muted-foreground mb-4">ТАРИФЫ</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Выберите свой формат отдыха
            </h3>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Стоимость указана за сутки за дом. Дети до 5 лет — бесплатно.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tariffs.map((t) => (
              <div
                key={t.id}
                className={`rounded-3xl p-8 md:p-10 border transition-all duration-300 hover:shadow-elegant flex flex-col ${
                  t.accent
                    ? "bg-primary text-primary-foreground border-primary scale-[1.02]"
                    : "bg-background border-border"
                }`}
              >
                <div className="mb-8">
                  <h4 className="text-2xl font-light mb-2">{t.name}</h4>
                  <p
                    className={`text-sm ${
                      t.accent ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {t.tagline}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-5xl font-light">{t.price}</span>
                  <span
                    className={`ml-2 ${
                      t.accent ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    ₽ / сутки
                  </span>
                </div>

                <ul className="space-y-3 mb-10 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                          t.accent ? "text-accent" : "text-primary"
                        }`}
                      />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  variant={t.accent ? "secondary" : "outline"}
                  className="w-full rounded-full text-minimal py-6"
                >
                  ВЫБРАТЬ ТАРИФ
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
