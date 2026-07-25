import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const CENTER: [number, number] = [43.99037, 40.951095];

const houseIcon = L.divIcon({
  className: "",
  html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="56" height="56">
    <defs>
      <filter id="s" x="-20%" y="-20%" width="140%" height="180%">
        <feDropShadow dx="0" dy="3" stdDeviation="4" flood-opacity=".35"/>
      </filter>
    </defs>
    <!-- roof -->
    <polygon points="32,4 6,26 58,26" fill="#c4843a" stroke="#8b5e2c" stroke-width="1.5" filter="url(#s)"/>
    <!-- house body -->
    <rect x="14" y="24" width="36" height="32" rx="2" fill="#f5e6c8" stroke="#8b5e2c" stroke-width="1.5" filter="url(#s)"/>
    <!-- door -->
    <rect x="24" y="38" width="16" height="18" rx="2" fill="#6b3a1f"/>
    <!-- door knob -->
    <circle cx="36" cy="47" r="1.5" fill="#d4a843"/>
    <!-- left window -->
    <rect x="17" y="28" width="10" height="10" rx="1.5" fill="#a8d8ea" stroke="#6b3a1f" stroke-width="1"/>
    <!-- right window -->
    <rect x="37" y="28" width="10" height="10" rx="1.5" fill="#a8d8ea" stroke="#6b3a1f" stroke-width="1"/>
    <!-- chimney -->
    <rect x="42" y="8" width="6" height="16" rx="1" fill="#8b5e2c"/>
  </svg>`,
  iconSize: [56, 56],
  iconAnchor: [28, 56],
  popupAnchor: [0, -56],
});

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <div className="text-minimal mb-4">АРУНА - ТУР</div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Сруб у леса с баней, купелью и пространством для йоги. Горы Карачаево-Черкесии.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <div className="text-minimal mb-4 text-primary-foreground/70">КОНТАКТЫ</div>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+891****5285" className="hover:text-accent transition-colors">+8-915-025-52-85</a></li>
              <li><a href="mailto:hello@аруна-тур.рф" className="hover:text-accent transition-colors">hello@аруна-тур.рф</a></li>
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

          {/* Mini map */}
          <div className="rounded-xl overflow-hidden border border-primary-foreground/15 h-[240px]">
            <MapContainer
              center={CENTER}
              zoom={15}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={CENTER} icon={houseIcon} />
            </MapContainer>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
