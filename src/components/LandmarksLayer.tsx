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
    const group = L.featureGroup().addTo(map);

    landmarkPoints.forEach((point) => {
      const meta = typeMeta[point.type];
      const marker = L.marker(point.coords, {
        icon: createLandmarkIcon(point),
      });

      const popupHtml = `
        <div style="font-size:13px;font-family:sans-serif;max-width:220px;line-height:1.4">
          <p style="font-weight:700;color:#1a1a1a;margin:0 0 4px;font-size:14px">${point.name}</p>
          <p style="font-size:12px;color:#666;margin:0 0 4px"><b>${meta.label}</b></p>
          ${
            point.description
              ? `<p style="font-size:12px;color:#555;margin:0">${point.description}</p>`
              : ""
          }
        </div>
      `;
      marker.bindPopup(popupHtml);
      marker.bindTooltip(point.name, {
        direction: "top",
        offset: [0, -24],
        opacity: 0.9,
      });
      group.addLayer(marker);
    });

    // Зум на все достопримечательности при загрузке
    const bounds = group.getBounds();
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 });
    }

    // При включении слоя через контроль — зумим на все маркеры
    const onOverlayAdd = (e: L.LayersControlEvent) => {
      if (e.name === "Достопримечательности" && e.layer === group) {
        const bounds = group.getBounds();
        if (bounds.isValid()) {
          map.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 });
        }
      }
    };
    map.on("overlayadd", onOverlayAdd);

    if (typeof window !== "undefined") {
      (window as any).layers ??= {};
      (window as any).layers.landmarks = {
        name: "Достопримечательности",
        leafletLayer: group,
      };
    }

    return () => {
      group.remove();
      map.off("overlayadd", onOverlayAdd);
    };
  }, [map]);

  return null;
};

export default LandmarksLayer;
export { landmarkPoints };
export type { LandmarkPoint };
