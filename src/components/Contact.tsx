import BookingForm from "@/components/BookingForm";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const icon = L.icon({
  iconUrl: "/marker-icon.png",
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const CENTER: [number, number] = [43.9889, 40.9569];

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
                    href="https://wa.me/89150255285"
                    className="text-xl hover:text-accent transition-colors duration-300"
                  >
                    +8-915-025-52-85
                  </a>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">ПОЧТА</h4>
                  <a
                    href="mailto:hello@аруна-тур.рф"
                    className="text-xl hover:text-accent transition-colors duration-300"
                  >
                    hello@аруна-тур.рф
                  </a>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">АДРЕС</h4>
                  <address className="text-xl not-italic">
                    КЧР, посёлок Курджиново,
                    <br />
                    ул. Лесная, 12
                  </address>
                  <div className="mt-3 rounded-xl overflow-hidden border border-border h-[200px]">
                    <MapContainer
                      center={CENTER}
                      zoom={14}
                      zoomControl={false}
                      dragging={false}
                      scrollWheelZoom={false}
                      doubleClickZoom={false}
                      style={{ height: "100%", width: "100%" }}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={CENTER} icon={icon} />
                    </MapContainer>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
