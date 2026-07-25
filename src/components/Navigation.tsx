import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "/host", label: "ХОЗЯИН" },
  { href: "/routes", label: "МАРШРУТЫ" },
  { href: "/blog", label: "ОТЧЁТЫ ГОСТЕЙ" },
  { href: "/contact", label: "КОНТАКТЫ" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-minimal text-foreground">
          АРУНА - ТУР
        </a>

        <div className="hidden md:flex items-center space-x-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <ThemeToggle />
          <a
            href="/contact"
            className="text-sm font-semibold uppercase tracking-widest px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
          >
            ЗАБРОНИРОВАТЬ
          </a>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <ThemeToggle />
              <a
                href="/contact"
                className="text-sm font-semibold uppercase tracking-widest px-4 py-2 rounded-full bg-primary text-primary-foreground"
              >
                ЗАБРОНИРОВАТЬ
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
