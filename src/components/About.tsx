const About = () => {
  return (
    <section id="about" className="py-32 bg-muted/40 bg-section-1">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">ФИЛОСОФИЯ</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Философия отдыха
                <br />в Курджиново
              </h3>

              <div className="space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Курджиново — это место силы, где время течёт иначе. Здесь нет суеты.
                  Наша философия — подарить вам состояние «здесь и сейчас».
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Мы не делаем интерьер ради «вау-эффекта». Мы делаем его для сна с открытым
                  окном под звёздами, долгих завтраков на веранде и полного отключения
                  от уведомлений. Дышите, смотрите на облака, топите баню — всё остальное подождёт.
                </p>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">ЧТО ВАЖНО ДЛЯ НАС</h4>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-6">
                    <h5 className="text-lg font-medium mb-2">Тишина</h5>
                    <p className="text-muted-foreground">
                      Никаких чужих голосов. Только ветер в соснах и река за окном.
                    </p>
                  </div>
                  <div className="border-l-2 border-secondary pl-6">
                    <h5 className="text-lg font-medium mb-2">Здоровый сон</h5>
                    <p className="text-muted-foreground">
                      Ортопедические матрасы, плотные шторы, прохладный горный воздух.
                    </p>
                  </div>
                  <div className="border-l-2 border-accent pl-6">
                    <h5 className="text-lg font-medium mb-2">Локальная кухня</h5>
                    <p className="text-muted-foreground">
                      Домашняя аджика, мёд, травяной чай и парное молоко от соседей.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">ВЫСОТА</h4>
                    <p className="text-xl">820 м</p>
                  </div>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">ПЛОЩАДЬ</h4>
                    <p className="text-xl">100 м²</p>
                  </div>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">ГОСТЕЙ</h4>
                    <p className="text-xl">до 8</p>
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

export default About;
