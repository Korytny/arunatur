import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

const LayerControl = () => {
  const map = useMap();

  useEffect(() => {
    // Делаем паузу, чтобы все слои успели зарегистрироваться в window.layers
    const timer = setTimeout(() => {
      const layers = (window as any).layers;
      if (!layers) return;

      const overlays: Record<string, L.Layer> = {};

      Object.entries(layers).forEach(([, val]: [string, any]) => {
        if (val.leafletLayer) {
          overlays[val.name] = val.leafletLayer;
        }
      });

      if (Object.keys(overlays).length === 0) return;

      L.control
        .layers(undefined, overlays, { collapsed: false })
        .addTo(map);
    }, 0);

    return () => clearTimeout(timer);
  }, [map]);

  return null;
};

export default LayerControl;
