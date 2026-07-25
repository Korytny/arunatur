import { useEffect } from "react";
import { useMap } from "react-leaflet";

const ScrollWheelHandler = () => {
  const map = useMap();

  useEffect(() => {
    map.scrollWheelZoom.disable();

    const enableScroll = () => {
      if (!map.scrollWheelZoom.enabled()) {
        map.scrollWheelZoom.enable();
      }
    };

    map.on("click", enableScroll);
    map.on("focus", enableScroll);

    return () => {
      map.off("click", enableScroll);
      map.off("focus", enableScroll);
    };
  }, [map]);

  return null;
};

export default ScrollWheelHandler;
