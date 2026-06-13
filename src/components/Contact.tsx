const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-muted/40">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">БРОНИРОВАНИЕ</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Приезжайте
                <br />
                подышать горами
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">TELEGRAM / WHATSAPP</h4>
                  <a
                    href="https://wa.me/79280000000"
                    className="text-xl hover:text-accent transition-colors duration-300"
                  >
                    +7 (928) 000-00-00
                  </a>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">ПОЧТА</h4>
                  <a
                    href="mailto:hello@kurdzhinovo-house.ru"
                    className="text-xl hover:text-accent transition-colors duration-300"
                  >
                    hello@kurdzhinovo-house.ru
                  </a>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">АДРЕС</h4>
                  <address className="text-xl not-italic">
                    КЧР, посёлок Курджиново,
                    <br />
                    ул. Лесная, 12
                  </address>
                  <a
                    href="https://yandex.ru/maps/?text=Курджиново"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 text-minimal text-accent hover:text-primary transition-colors"
                  >
                    ОТКРЫТЬ В ЯНДЕКС.КАРТАХ →
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">ПОЛЕЗНОЕ ГОСТЯМ</h4>
                <div className="space-y-4">
                  <a href="#" className="block text-xl hover:text-accent transition-colors duration-300">
                    Инструкция как доехать
                  </a>
                  <a href="#" className="block text-xl hover:text-accent transition-colors duration-300">
                    Памятка гостя
                  </a>
                  <a href="#" className="block text-xl hover:text-accent transition-colors duration-300">
                    Правила бронирования
                  </a>
                  <a href="#" className="block text-xl hover:text-accent transition-colors duration-300">
                    Карта маршрутов: водопады и дольмены
                  </a>
                </div>
              </div>

              <div className="pt-12 border-t border-border">
                <p className="text-muted-foreground leading-relaxed">
                  Напишите, на какие даты планируете, сколько вас и нужна ли встреча
                  в Минеральных Водах. Мы ответим в течение пары часов — и расскажем
                  про погоду, баню и куда сходить за местным сыром.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
