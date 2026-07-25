import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import InfrastructureLayer from "@/components/InfrastructureLayer";
import LandmarksLayer from "@/components/LandmarksLayer";
import RoutesLayer from "@/components/RoutesLayer";
import LayerControl from "@/components/LayerControl";

const CENTER: [number, number] = [43.9889, 40.9569];

const MapSection = () => {
  return (
    <section id="routes" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">МАРШРУТЫ</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">
                Курджиново и окрестности
              </h3>
            </div>
            <a
              href="/routes"
              className="hidden md:inline-block text-minimal text-secondary hover:text-accent transition-colors border-b border-secondary/30 hover:border-accent/30 pb-0.5 shrink-0 ml-8"
            >
              Посмотреть полностью →
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-elegant h-[450px] md:h-[600px]">
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
          <div className="mt-8 text-center">
            <a
              href="/routes"
              className="inline-block text-minimal text-secondary hover:text-accent transition-colors border-b border-secondary/30 hover:border-accent/30 pb-0.5"
            >
              Все маршруты и подробнее →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
