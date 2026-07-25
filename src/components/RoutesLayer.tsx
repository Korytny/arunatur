import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { routes, type Route } from "@/data/routes";

const RoutesLayer = () => {
  const map = useMap();

  useEffect(() => {
    const group = L.featureGroup();

    routes.forEach((route: Route) => {
      const polyline = L.polyline(route.points, {
        color: route.color,
        dashArray: route.dashArray,
        weight: route.weight ?? 3,
      });

      const waypointHtml =
        route.waypoints
          ?.map(
            (wp) =>
              `<li style="margin:0 0 3px;font-size:12px;color:#444">${wp.name}${wp.description ? ` <span style="color:#888">— ${wp.description}</span>` : ""}</li>`,
          )
          .join("") ?? "";

      polyline.bindPopup(`
        <div style="font-size:13px;font-family:sans-serif;max-width:260px;line-height:1.4">
          <p style="font-weight:700;color:#1a1a1a;margin:0 0 6px;font-size:14px">${route.name}</p>
          <p style="font-size:12px;color:#555;margin:0 0 6px">${route.description}</p>
          <p style="font-size:12px;color:#888;margin:0 0 3px;font-weight:600;border-top:1px solid #eee;padding-top:4px">Остановки:</p>
          <ul style="margin:0;padding-left:18px">${waypointHtml}</ul>
        </div>
      `);

      group.addLayer(polyline);
    });

    // Зум на маршруты при включении слоя
    group.on("add", () => {
      const b = group.getBounds();
      if (b.isValid()) {
        map.fitBounds(b, { padding: [50, 50], maxZoom: 14 });
      }
    });

    if (typeof window !== "undefined") {
      (window as any).layers ??= {};
      (window as any).layers.routes = {
        name: "Маршруты",
        leafletLayer: group,
      };
    }

    return () => {
      group.remove();
    };
  }, [map]);

  return null;
};

export default RoutesLayer;
export { routes };
export type { Route, RoutePoint } from "@/data/routes";
