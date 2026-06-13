import heroImage from "@/assets/hero-architecture.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 warm-image">
        <div
          className="bg absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </div>
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <p className="text-minimal text-white/80 mb-6 reveal">
          КАРАЧАЕВО-ЧЕРКЕСИЯ · ПОСЁЛОК КУРДЖИНОВО
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white text-architectural mb-8 reveal">
          Дом для жизни
          <br />
          в горах
        </h1>
        <p className="text-lg md:text-2xl text-white/85 font-light max-w-2xl mx-auto reveal-delayed">
          Дом у леса с баней, купелью и пространством для йоги.
          Идеальное место, чтобы перезагрузиться вдали от города.
        </p>

        <div className="mt-12 reveal-delayed flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="/contact"
            className="text-minimal px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 shadow-elegant"
          >
            ЗАБРОНИРОВАТЬ ДАТЫ
          </a>
          <a
            href="/work"
            className="text-minimal px-8 py-4 rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors duration-300"
          >
            ПОСМОТРЕТЬ ДОМ
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 reveal-delayed">
        <div className="w-px h-16 bg-white/40 mx-auto" />
        <div className="text-minimal text-white/70 mt-4">ТИШИНА · ЛЕС · ГОРЫ</div>
      </div>
    </section>
  );
};

export default Hero;
