import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { landmarkPoints, type LandmarkPoint } from "@/data/landmarkPoints";

const typeMeta: Record<
  LandmarkPoint["type"],
  { label: string; color: string; emoji: string }
> = {
  viewpoint:  { label: "Смотровая",        color: "#F97316", emoji: "🏔" },
  waterfall:  { label: "Водопад",          color: "#06B6D4", emoji: "💧" },
  historical: { label: "Историческое место", color: "#8B5CF6", emoji: "🏛" },
  natural:    { label: "Природный объект",  color: "#10B981", emoji: "🌲" },
  cultural:   { label: "Культура",         color: "#EC4899", emoji: "🎭" },
  religious:  { label: "Религиозное место", color: "#F59E0B", emoji: "⛪" },
  recreation: { label: "Отдых",            color: "#3B82F6", emoji: "🧺" },
};

function createLandmarkIcon(point: LandmarkPoint): L.DivIcon {
  const meta = typeMeta[point.type];
  return L.divIcon({
    className: "landmark-marker",
    html: `<div style="
      width: 36px; height: 36px;
      background: ${meta.color};
      border: 2px solid white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.35);
      cursor: pointer;
    ">${meta.emoji}</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -20],
  });
}

const LandmarksLayer = () => {
  const map = useMap();

  useEffect(() => {
    const group = L.layerGroup().addTo(map);

    landmarkPoints.forEach((point) => {
      const meta = typeMeta[point.type];
      const marker = L.marker(point.coords, {
        icon: createLandmarkIcon(point),
      });

      const popupHtml = `
        <div style="font-size:13px;font-family:sans-serif;max-width:200px">
          <p style="font-weight:600;color:#333;margin:0 0 4px">${point.name}</p>
          <p style="font-size:12px;color:#666;margin:0 0 4px">${meta.label}</p>
          ${
            point.description
              ? `<p style="font-size:12px;color:#888;margin:0">${point.description}</p>`
              : ""
          }
        </div>
      `;
      marker.bindPopup(popupHtml);
      group.addLayer(marker);
    });

    if (typeof window !== "undefined") {
      (window as any).layers ??= {};
      (window as any).layers.landmarks = {
        name: "Достопримечательности",
        leafletLayer: group,
      };
    }

    return () => {
      group.remove();
    };
  }, [map]);

  return null;
};

export default LandmarksLayer;
export { landmarkPoints };
export type { LandmarkPoint };
