import {
  Sun,
  Moon,
  Flame,
  Ban,
  PawPrint,
  Utensils,
  ShieldAlert,
  Clock,
} from "lucide-react";

const rules = [
  {
    icon: Clock,
    title: "Заезд и выезд",
    description: "Заезд с 15:00, выезд до 12:00. По договорённости — ранний заезд или поздний выезд, если дом свободен.",
  },
  {
    icon: Moon,
    title: "Тишина",
    description: "Просим соблюдать тишину с 23:00 до 8:00. В высокий сезон (июль–сентябрь) действует усиленный режим тишины.",
  },
  {
    icon: Flame,
    title: "Баня",
    description: "Топим на дровах по записи. Веники из местных трав — в подарок. После бани — купель с родниковой водой для контраста.",
  },
  {
    icon: Ban,
    title: "Курение",
    description: "Курение разрешено только на улице, в специально отведённых местах. В доме — строго нет, срабатывает пожарная сигнализация.",
  },
  {
    icon: PawPrint,
    title: "Питомцы",
    description: "С любимцами — добро пожаловать по согласованию. Крупные собаки агрессивных пород — не подходят. Убирайте за питомцем на территории.",
  },
  {
    icon: Utensils,
    title: "Мангал",
    description: "Мангал, шампуры, угли и розжиг — входят в стоимость. После себя просим убрать и затушить угли. Дрова для мангала — в дровнике за баней.",
  },
  {
    icon: Sun,
    title: "Уборка",
    description: "Генеральная уборка после вас — наша забота. Но просим оставить дом в порядке: посуду помыть, мусор вынести в контейнер у калитки.",
  },
  {
    icon: ShieldAlert,
    title: "Ответственность",
    description: "Администрация не несёт ответственности за сохранность оставленных вещей и ценных предметов. Ценности рекомендуем оставлять в сейфе (есть в каждой спальне).",
  },
];

const HouseRules = () => {
  return (
    <section id="rules" className="py-32 bg-muted/40">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-minimal text-muted-foreground mb-4">
              ПРАВИЛА
            </h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Договоримся на берегу
            </h3>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Несколько простых правил, чтобы ваш отдых и отдых соседей
              прошёл комфортно.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rules.map((rule) => {
              const Icon = rule.icon;
              return (
                <div
                  key={rule.title}
                  className="group rounded-2xl bg-background border border-border p-6 hover:shadow-elegant transition-all duration-300 hover:border-primary/20"
                >
                  <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-medium text-architectural mb-2">
                    {rule.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseRules;
