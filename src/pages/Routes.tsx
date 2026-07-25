import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import InfrastructureLayer from "@/components/InfrastructureLayer";
import LandmarksLayer from "@/components/LandmarksLayer";
import RoutesLayer from "@/components/RoutesLayer";
import LayerControl from "@/components/LayerControl";
import routes1 from "@/assets/routes1.jpg";
import routes2 from "@/assets/routes2.jpg";
import routes3 from "@/assets/routes3.jpg";
import routes4 from "@/assets/routes4.jpg";

const CENTER: [number, number] = [43.9889, 40.9569];

const Routes = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-minimal text-muted-foreground mb-4">МАРШРУТЫ</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
              Курджиново и окрестности
            </h3>
            <div className="rounded-2xl overflow-hidden border border-border shadow-elegant h-[600px]">
              <MapContainer
                center={CENTER}
                zoom={14}
                scrollWheelZoom
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <InfrastructureLayer />
                <LandmarksLayer />
                <RoutesLayer />
                <LayerControl />
              </MapContainer>
            </div>
            <div className="mt-16">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Популярные курорты Архыз и Домбай находятся от нас всего в 100&nbsp;км. Выехав утром, можно легко прокатиться на горных лыжах или сноуборде и вернуться в нашу уютную деревеньку, где гораздо тише и меньше аренда, чем у подъёмников.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <img
                  src={routes1}
                  alt="Маршрут по окрестностям Курджиново"
                  loading="lazy"
                  className="rounded-2xl object-cover w-full aspect-[16/9] shadow-architectural"
                />
                <img
                  src={routes2}
                  alt="Горные тропы КЧР"
                  loading="lazy"
                  className="rounded-2xl object-cover w-full aspect-[16/9] shadow-architectural"
                />
                <img
                  src={routes3}
                  alt="Достопримечательности Кавказа"
                  loading="lazy"
                  className="rounded-2xl object-cover w-full aspect-[16/9] shadow-architectural"
                />
                <img
                  src={routes4}
                  alt="Природа Карачаево-Черкесии"
                  loading="lazy"
                  className="rounded-2xl object-cover w-full aspect-[16/9] shadow-architectural"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Routes;
