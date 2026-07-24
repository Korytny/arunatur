import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { infrastructurePoints, type InfrastructurePoint } from "@/data/infrastructurePoints";

const typeMeta: Record<
  InfrastructurePoint["type"],
  { label: string; color: string; emoji: string }
> = {
  parking:  { label: "Парковка",   color: "#3B82F6", emoji: "🅿" },
  cafe:     { label: "Кафе",       color: "#F59E0B", emoji: "☕" },
  shop:     { label: "Магазин",    color: "#10B981", emoji: "🛒" },
  pharmacy: { label: "Аптека",     color: "#EF4444", emoji: "💊" },
  atm:      { label: "Банкомат",   color: "#8B5CF6", emoji: "🏦" },
  gas:      { label: "АЗС",        color: "#EC4899", emoji: "⛽" },
  bus:      { label: "Автостанция", color: "#6366F1", emoji: "🚌" },
  medical:  { label: "Медицина",   color: "#DC2626", emoji: "🏥" },
  banya:    { label: "Баня",       color: "#F97316", emoji: "🧖" },
  info:     { label: "Инфоцентр",  color: "#06B6D4", emoji: "ℹ" },
  wc:       { label: "Туалет",     color: "#6B7280", emoji: "🚻" },
};

function createInfrastructureIcon(point: InfrastructurePoint): L.DivIcon {
  const meta = typeMeta[point.type];
  return L.divIcon({
    className: "infrastructure-marker",
    html: `<div style="
      width: 32px; height: 32px;
      background: ${meta.color};
      border: 2px solid white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      cursor: pointer;
    ">${meta.emoji}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18],
  });
}

const InfrastructureLayer = () => {
  const map = useMap();

  useEffect(() => {
    const group = L.layerGroup().addTo(map);

    infrastructurePoints.forEach((point) => {
      const meta = typeMeta[point.type];
      const marker = L.marker(point.coords, {
        icon: createInfrastructureIcon(point),
      });

      const popupLines: string[] = [];
      popupLines.push(
        `<p style="font-weight:600;color:#333;margin:0 0 4px">${point.name}</p>`,
      );
      popupLines.push(
        `<p style="font-size:12px;color:#666;margin:0 0 4px">${meta.label}</p>`,
      );
      if (point.address) {
        popupLines.push(
          `<p style="font-size:12px;color:#666;margin:0 0 2px">📍 ${point.address}</p>`,
        );
      }
      if (point.hours) {
        popupLines.push(
          `<p style="font-size:12px;color:#888;margin:0 0 2px">🕐 ${point.hours}</p>`,
        );
      }
      if (point.phone) {
        popupLines.push(
          `<p style="font-size:12px;color:#888;margin:0">📞 ${point.phone}</p>`,
        );
      }

      marker.bindPopup(
        `<div style="font-size:13px;font-family:sans-serif">${popupLines.join("")}</div>`,
      );
      group.addLayer(marker);
    });

    if (typeof window !== "undefined") {
      (window as any).layers ??= {};
      (window as any).layers.infrastructure = {
        name: "Инфраструктура",
        leafletLayer: group,
      };
    }

    return () => {
      group.remove();
    };
  }, [map]);

  return null;
};

export default InfrastructureLayer;
export { infrastructurePoints };
export type { InfrastructurePoint };
