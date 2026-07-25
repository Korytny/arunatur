import banyaImage from "@/assets/banya.jpg";
import restImage from "@/assets/rest.jpg";
import yogaImage from "@/assets/yoga.jpg";
import kuhnyaImage from "@/assets/kuhnya.jpg";
import pechImage from "@/assets/pech.jpg";

const Portfolio = () => {
  const zones = [
    {
      image: banyaImage,
      title: "БАНЯ НА ДРОВАХ",
      meta: "ПАРНАЯ · 6 ЧЕЛОВЕК",
      description:
        "Пар с можжевельником, веники из местных трав, печь на дровах. Прогревает до самых костей после горного воздуха.",
    },
    {
      image: yogaImage,
      title: "ЙОГА-ХОЛЛ С ПАНОРАМОЙ",
      meta: "ТЁПЛЫЙ ПОЛ · 40 М²",
      description:
        "Теплый пол, маты, вид на рассвет над хребтом. Проводим утренние практики — приходите со своим ковриком или берите наш.",
    },
    {
      image: restImage,
      title: "СПАЛЬНИ СКАНДИ-ШАЛЕ",
      meta: "3 КОМНАТЫ · ТЕМНОТА",
      description:
        "Ортопедические матрасы, хлопковое бельё, плотные шторы для полной темноты. Сон, после которого хочется жить.",
    },
    {
      image: kuhnyaImage,
      title: "КУХНЯ-ГОСТИНАЯ",
      meta: "ПОЛНЫЙ ФАРТУК · ПОСУДА",
      description:
        "Уютная кухня-гостиная, где можно готовить всей компанией. Всё необходимое для домашних ужинов — от сковородок до специй.",
    },
    {
      image: pechImage,
      title: "ПЕЧЬ НА ДРОВАХ",
      meta: "ТЕПЛО · УЮТ · ПРОСТОР",
      description:
        "Настоящая дровяная печь — сердце дома. Она греет не только воздух, но и душу: тепло идёт отовсюду, уютно потрескивают дрова, а вокруг столько места, что хватит всем.",
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
                <div className="warm-image shadow-architectural">
                  <img
                    src={z.image}
                    alt={z.title}
                    loading="lazy"
                    className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

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
