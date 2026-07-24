import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import InfrastructureLayer from "@/components/InfrastructureLayer";
import LandmarksLayer from "@/components/LandmarksLayer";
import RoutesLayer from "@/components/RoutesLayer";
import LayerControl from "@/components/LayerControl";

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
              Курджиново
              <br />
              и окрестности
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
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Routes;
