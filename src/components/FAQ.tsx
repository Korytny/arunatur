import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS_SHOWN = 4;

const faqItems = [
  {
    id: "location",
    question: "Где находится дом и как добраться?",
    answer:
      "Дом расположен в селе Курджиново, Карачаево-Черкесия. Координаты и подробную схему проезда мы высылаем после бронирования. Ближайший аэропорт — Минеральные Воды (3,5 часа на машине). Дорога асфальтированная до самого села, подъём к дому — гравийка в хорошем состоянии. Мы поможем с трансфером или сориентируем по такси.",
  },
  {
    id: "wifi",
    question: "Есть ли Wi-Fi и мобильная связь?",
    answer:
      "Да, в доме стабильный Wi-Fi (симметричный канал 50 Мбит/с). Мобильная связь — МТС и Билайн работают уверенно, Мегафон — с перебоями. Если хотите полную цифровую детоксикацию — просто отключите уведомления, но оставаться на связи при необходимости сможете.",
  },
  {
    id: "children",
    question: "Можно ли приезжать с детьми?",
    answer:
      "Да, мы принимаем гостей с детьми любого возраста. В доме есть манеж и стульчик для кормления (предупредите заранее). Территория огорожена, рядом нет оживлённых дорог. Пожалуйста, присматривайте за детьми во время топки бани и у купели.",
  },
  {
    id: "pets",
    question: "Можно ли с питомцами?",
    answer:
      "По согласованию. Крупные животные — строго на улице. Пожалуйста, предупредите о питомце при бронировании.",
  },
  {
    id: "heating",
    question: "Какое отопление в доме?",
    answer:
      "В доме электрическое отопление (тёплые полы + конвекторы). В холодное время года дополнительно можно протопить камин — создаёт особую атмосферу и даёт сухое тепло. Дрова для камина и бани включены в стоимость проживания.",
  },
  {
    id: "checkin",
    question: "Какое время заезда и выезда?",
    answer:
      "Заезд (check-in) — с 15:00. Выезд (check-out) — до 12:00. По предварительной договорённости возможен ранний заезд или поздний выезд, если дом свободен в эти дни. В высокий сезон (июль–сентябрь) время заезда и выезда фиксированное.",
  },
  {
    id: "booking",
    question: "Как происходит бронирование?",
    answer:
      "После отправки заявки мы свяжемся с вами в течение 2 часов. Бронирование подтверждается после внесения предоплаты 50%. Оставшуюся сумму можно оплатить по прибытии наличными или переводом. Отмена бронирования: за 7 дней — полный возврат предоплаты, за 3–6 дней — возврат 50%, менее чем за 3 дня — предоплата не возвращается.",
  },
  {
    id: "what-to-take",
    question: "Что взять с собой?",
    answer:
      "Мы рекомендуем взять: удобную треккинговую обувь, купальник (для купели), фонарик (вечерние прогулки), репелленты (в тёплое время года), личные принадлежности. Полотенца и постельное бельё предоставляется. Если забыли что-то — спрашивайте, у нас есть небольшой запас.",
  },
  {
    id: "car",
    question: "Нужен ли полный привод?",
    answer:
      "В сухую погоду до дома можно доехать на любом автомобиле. В дождь и зимой рекомендуется полный привод или цепи противоскольжения — последние 800 метров имеют небольшой подъём. Если сомневаетесь в проходимости — мы встретим вас на въезде в село и покажем оптимальный маршрут.",
  },
  {
    id: "shops",
    question: "Есть ли рядом магазины и кафе?",
    answer:
      "В самом Курджиново есть продуктовый магазин (10 минут пешком) и несколько небольших кафе с местной кухней. Более крупный выбор — в станице Зеленчукская (25 минут на машине). На территории дома есть мангал и все принадлежности для приготовления еды.",
  },
];

const FAQ = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? faqItems : faqItems.slice(0, FAQ_ITEMS_SHOWN);

  return (
    <section id="faq" className="py-32 bg-muted/40 bg-section-4">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-minimal text-muted-foreground mb-4">
              ЧАСТЫЕ ВОПРОСЫ
            </h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Всё, что важно знать
            </h3>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Мы собрали самые частые вопросы гостей. Если не нашли ответ —
              напишите нам, мы всегда на связи.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {visibleItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-none rounded-2xl bg-background px-6 shadow-sm hover:shadow-elegant transition-shadow duration-300 data-[state=open]:shadow-elegant"
              >
                <AccordionTrigger className="text-base md:text-lg font-medium text-foreground py-5 hover:no-underline [&>svg]:text-secondary [&>svg]:h-5 [&>svg]:w-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {!showAll && faqItems.length > FAQ_ITEMS_SHOWN && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(true)}
                className="text-minimal px-8 py-4 rounded-full border border-border text-foreground hover:bg-accent/10 transition-colors duration-300"
              >
                Показать все вопросы ({faqItems.length})
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
