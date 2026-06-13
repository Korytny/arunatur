import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("ВСЕ");
  const categories = ["ВСЕ", "СЕМЬЯ", "ТРЕККИНГ", "ДРУЗЬЯ"];

  const filtered =
    activeCategory === "ВСЕ"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-minimal text-muted-foreground mb-4">ОТЧЁТЫ ГОСТЕЙ</h2>
            <h1 className="text-5xl md:text-7xl font-light text-architectural mb-8">
              Как прошёл ваш отдых?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Живые истории от тех, кто уже побывал в доме. Без редактуры — как было.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-6 md:gap-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`text-minimal transition-colors duration-300 relative group ${
                  activeCategory === c ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-primary transition-transform duration-300 origin-left w-full ${
                    activeCategory === c ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filtered.map((post) => (
              <article key={post.id} className="group">
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="warm-image mb-6 shadow-elegant">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs text-foreground font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-xs text-muted-foreground space-x-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-light text-architectural group-hover:text-accent transition-colors duration-500">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="pt-3">
                      <span className="text-minimal text-primary group-hover:text-accent transition-colors duration-300">
                        ЧИТАТЬ ОТЧЁТ →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-light text-architectural mb-6">
            Хотите оставить отчёт?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Напишите нам пару строк после поездки — мы опубликуем с вашим именем.
          </p>
          <a
            href="/contact"
            className="inline-block text-minimal px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            НАПИСАТЬ ХОЗЯЕВАМ
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
