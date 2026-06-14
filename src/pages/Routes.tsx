import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const icon = L.icon({
  iconUrl: "/marker-icon.png",
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const CENTER: [number, number] = [43.9889, 40.9569];

const routePoints: [number, number][] = [
  [43.9889, 40.9569],
  [43.9950, 40.9700],
  [43.9800, 40.9750],
  [43.9850, 40.9450],
];

const routeLabels = [
  "Курджиново — старт",
  "Смотровая точка",
  "Водопад",
  "Поляна для привала",
];

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
                {routePoints.map((pos, i) => (
                  <Marker key={i} position={pos} icon={icon}>
                    <Popup>{routeLabels[i]}</Popup>
                  </Marker>
                ))}
                <Polyline
                  positions={routePoints}
                  color="red"
                  dashArray="8 6"
                  weight={3}
                />
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
