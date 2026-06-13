const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="text-minimal mb-4">ДОМ · КУРДЖИНОВО</div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Сруб у леса с баней, купелью и пространством для йоги. Горы Карачаево-Черкесии.
            </p>
          </div>

          <div>
            <div className="text-minimal mb-4 text-primary-foreground/70">БЫСТРЫЕ ССЫЛКИ</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Инструкция как доехать</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Памятка гостя</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Правила бронирования</a></li>
            </ul>
          </div>

          <div>
            <div className="text-minimal mb-4 text-primary-foreground/70">КОНТАКТЫ</div>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+79280000000" className="hover:text-accent transition-colors">+7 (928) 000-00-00</a></li>
              <li><a href="mailto:hello@kurdzhinovo-house.ru" className="hover:text-accent transition-colors">hello@kurdzhinovo-house.ru</a></li>
              <li>
                <a
                  href="https://yandex.ru/maps/?text=Курджиново"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  КЧР, Курджиново, ул. Лесная, 12
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-minimal mb-4 text-primary-foreground/70">СОЦСЕТИ</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Telegram</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">VK</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/15 text-xs text-primary-foreground/60 flex flex-col md:flex-row gap-3 md:justify-between">
          <span>© {new Date().getFullYear()} Аренда домов в Курджиново | Горы, баня, покой</span>
          <span>Сделано с любовью к Кавказу</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
