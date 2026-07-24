import {
  Clock,
  Ban,
  VolumeX,
  Flame,
  Baby,
  PawPrint,
  Sparkles,
  Shield,
  TreePine,
  ChevronDown,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const rules = [
  {
    icon: Clock,
    title: "Заезд и выезд",
    summary: "Заезд с 15:00 · Выезд до 12:00",
    detail:
      "Ранний заезд и поздний выезд — по договорённости, если дом свободен. В высокий сезон (июль–сентябрь) время фиксированное.",
  },
  {
    icon: Ban,
    title: "Курение",
    summary: "Только на улице",
    detail:
      "Курение в доме и на веранде запрещено. Пожалуйста, пользуйтесь пепельницами на улице. Штраф за нарушение — 5 000 ₽ (просушивание и химчистка мебели).",
  },
  {
    icon: VolumeX,
    title: "Тишина",
    summary: "С 23:00 до 8:00",
    detail:
      "Уважайте соседей и отдыхающих. Громкая музыка, крики и шумные вечеринки после 23:00 не допускаются. Территория находится в лесной зоне — звук разносится далеко.",
  },
  {
    icon: Flame,
    title: "Баня и купель",
    summary: "По записи · До 23:00",
    detail:
      "Баня топится по предварительной записи (дрова включены). Купель доступна круглосуточно, но после 23:00 — без шума. Не пользуйтесь баней в одиночку и в состоянии алкогольного опьянения. После бани обязательно закрывайте заслонку печи.",
  },
  {
    icon: Baby,
    title: "Дети",
    summary: "Принимаем с любым возрастом",
    detail:
      "На территории есть манеж и стульчик для кормления (сообщите заранее). Пожалуйста, не оставляйте детей без присмотра у купели, бани и мангала. Территория не полностью огорожена — лес рядом.",
  },
  {
    icon: PawPrint,
    title: "Питомцы",
    summary: "С предупреждением",
    detail:
      "Можно с питомцами, но предупредите при бронировании. Не подходит для крупных собак агрессивных пород. Возьмите лежанку, миски и пакеты для уборки. За питомцем нужно убирать на территории. Без мебели и постельного белья.",
  },
  {
    icon: Sparkles,
    title: "Уборка",
    summary: "После вас — генеральная",
    detail:
      "Перед выездом, пожалуйста, вынесите мусор, помойте посуду и уберите за собой в комнатах. Генеральную уборку после вашего отъезда проводит наша команда. Если нужна ежедневная уборка — сообщите, мы организуем (за доп. плату).",
  },
  {
    icon: Shield,
    title: "Ответственность",
    summary: "Вы отвечаете за свои вещи",
    detail:
      "Мы не несём ответственности за утерю личных вещей, денег и документов. Ценные вещи рекомендуем оставлять в сейфе (есть в доме) или не брать с собой. За порчу имущества — возмещение по факту.",
  },
  {
    icon: TreePine,
    title: "Мангал и дрова",
    summary: "Пользуйтесь, но уберите за собой",
    detail:
      "Мангал и шампуры предоставляются бесплатно. Дрова для мангала — в дровнике, берите сколько нужно. После использования потушите угли, уберите мусор и поставьте инвентарь на место. За разведение костра на земле без мангала — штраф.",
  },
];

const HouseRules = () => {
  return (
    <section id="rules" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-minimal text-muted-foreground mb-4">
              ПРАВИЛА ДОМА
            </h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Чтобы всем было комфортно
            </h3>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Несколько простых правил, чтобы ваш отдых и отдых следующих
              гостей прошёл без забот.
            </p>
          </div>

          <div className="space-y-3">
            {rules.map((rule) => {
              const Icon = rule.icon;
              return (
                <Collapsible
                  key={rule.title}
                  className="border border-border/60 rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-elegant data-[state=open]:shadow-elegant bg-card"
                >
                  <CollapsibleTrigger className="flex w-full items-center gap-4 px-6 py-5 text-left hover:bg-muted/20 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="text-base font-medium text-foreground block">
                        {rule.title}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {rule.summary}
                      </span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-muted-foreground transition-transform duration-200 [&[data-state=open]>svg]:rotate-180 data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-5 pt-1 text-muted-foreground leading-relaxed text-sm border-t border-border/40">
                    {rule.detail}
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseRules;
