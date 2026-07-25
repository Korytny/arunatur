import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import host1 from "@/assets/host1.jpg";
import host2 from "@/assets/host2.jpg";
import host3 from "@/assets/host3.jpg";

const Host = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-0 bg-gradient-to-b from-background via-muted/20 to-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <a
                href="/"
                className="text-minimal text-muted-foreground hover:text-foreground transition-colors text-sm mb-4 inline-block"
              >
                ← На главную
              </a>
              <h2 className="text-minimal text-muted-foreground mb-4">ХОЗЯИН</h2>
              <h1 className="text-4xl md:text-6xl font-light text-architectural">
                Кривошапов Алексей
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 pb-32 bg-gradient-to-b from-background via-muted/20 to-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="w-full md:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-architectural warm-image sticky top-32">
                    <img
                      src={host1}
                      alt="Алексей Кривошапов — хозяин гостевого дома"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <p>
                    Моя работа в родном городе Коломна — это монтаж инженерных
                    систем, отопление, электричество и т.д. Именно поэтому мы
                    позаботились, чтобы в нашем пространстве было тепло, светло и
                    уютно (и кабельный интернет, конечно). В нашем доме, который
                    находится на высоте 900 м над уровнем моря, всегда есть
                    чистейшая и мягкая горная вода прямо из-под крана, а в 300
                    метрах от дома течёт горный родник. Кроме инженерных работ, я
                    увлекаюсь этнической музыкой, медитацией и философией, поэтому
                    наше пространство — это место, где всё располагает к
                    умиротворению, созерцанию и творчеству. Вместе с этим, дом
                    находится рядом с колоритными местными магазинами, где можно
                    купить вкуснейший хлеб, масло, сыры и другие натуральные
                    продукты Кавказа.
                  </p>
                  <p>
                    Наша деревня находится на границе Кавказского биосферного
                    заповедника и Краснодарского края, поэтому отсюда удобно
                    путешествовать как в дикие горные места — например знаменитый
                    горный посёлок Рожкао, — так и в сторону Краснодарского края,
                    где есть целебные горячие источники. Даже если никуда не ехать
                    на машине, прямо в пешей доступности есть прекрасные видовые
                    площадки, водопадики, мистические мегалиты и, конечно, бурная
                    и чистая горная река Большая Лаба. Вы можете погостить у нас и
                    самостоятельно знакомиться с захватывающим и исцеляющим миром
                    Кавказа, либо по желанию заказать у нас услуги проводника в
                    самые сокровенные и красивые места.
                  </p>
                </div>
              </div>

              <div className="my-8 rounded-2xl overflow-hidden shadow-architectural warm-image">
                <img
                  src={host2}
                  alt="Гостевой дом в Курджиново"
                  className="w-full h-auto object-cover"
                />
              </div>

              <p>
                Если вдруг вы всё-таки продрогните в горах или попадёте под
                дождик, у нас в доме есть уютная банька на буковых и дубовых
                дровах.
              </p>
              <p>
                В нашей семье растут дети от 2 месяцев до 15 лет, и поэтому
                дом особенно подходит для отдыха семей с детьми, хотя и людям,
                ищущим умиротворения и покоя, тоже придётся здесь по душе. У
                себя в гостях мы хотели бы видеть людей, любящих красоту
                природы и ценящих доброе и творческое общение. Если вы
                интересуетесь туризмом, йогой и медитацией — значит, вам точно
                понравится у нас!
              </p>

              <div className="my-8 rounded-2xl overflow-hidden shadow-architectural warm-image">
                <img
                  src={host3}
                  alt="Семья и природа КЧР"
                  className="w-full h-auto object-cover"
                />
              </div>

              <p>
                Туристический сезон начинается у нас в середине лета, так как
                весна — это период дождей, но это тоже прекрасно по-своему из-
                за бурных рек и красивых водопадов. Сезон длится всё лето,
                осень, и даже зимой тут полно солнца и тепла. Для
                вегетарианцев можем организовать вкусные и полезные обеды!
              </p>
              <p className="font-medium text-xl text-architectural">
                Ждём вас в гости, приезжайте!
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Host;
