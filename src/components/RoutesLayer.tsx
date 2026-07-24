import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { routes, type Route } from "@/data/routes";

const RoutesLayer = () => {
  const map = useMap();

  useEffect(() => {
    const group = L.layerGroup().addTo(map);

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
              `<li style="margin:0 0 2px">${wp.name}${wp.description ? ` — ${wp.description}` : ""}</li>`,
          )
          .join("") ?? "";

      polyline.bindPopup(`
        <div style="font-size:13px;font-family:sans-serif;max-width:240px">
          <p style="font-weight:600;color:#333;margin:0 0 4px">${route.name}</p>
          <p style="font-size:12px;color:#666;margin:0 0 4px">${route.description}</p>
          <p style="font-size:11px;color:#888;margin:0 0 2px;font-weight:600">Остановки:</p>
          <ul style="font-size:11px;color:#888;margin:0;padding-left:16px">${waypointHtml}</ul>
        </div>
      `);

      group.addLayer(polyline);
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
