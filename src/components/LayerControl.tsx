import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

const LayerControl = () => {
  const map = useMap();

  useEffect(() => {
    const timer = setTimeout(() => {
      const layers = (window as any).layers;
      if (!layers) return;

      // ——— Custom control: [слои слева | 🔍 +/-, справа] ———
      const CustomLayers = L.Control.extend({
        options: { position: "topright" },

        onAdd() {
          const container = L.DomUtil.create("div");
          container.style.cssText =
            "display:flex;flex-direction:row;align-items:stretch;gap:4px;";

          // ——— Layer checkboxes (column on the left) ———
          const left = L.DomUtil.create("div", "", container);
          left.style.cssText =
            "display:flex;flex-direction:column;gap:2px;background:white;border:2px solid rgba(0,0,0,0.2);border-radius:4px;padding:8px 10px;box-shadow:0 1px 5px rgba(0,0,0,0.15);font-size:13px;line-height:1.6;";

          Object.entries(layers).forEach(([key, val]: [string, any]) => {
            if (!val.leafletLayer) return;

            const label = L.DomUtil.create("label", "", left);
            label.style.cssText =
              "display:flex;align-items:center;gap:6px;cursor:pointer;white-space:nowrap;";

            const cb = L.DomUtil.create("input", "", label);
            cb.type = "checkbox";
            cb.checked = true;
            cb.style.cssText = "accent-color:#4a7c59;cursor:pointer;margin:0;";

            label.append(` ${val.name}`);

            L.DomEvent.on(cb, "change", () => {
              if (cb.checked) {
                map.addLayer(val.leafletLayer);
              } else {
                map.removeLayer(val.leafletLayer);
              }
            });
          });

          // ——— Buttons (column on the right) ———
          const right = L.DomUtil.create("div", "", container);
          right.style.cssText =
            "display:flex;flex-direction:row;align-items:stretch;gap:4px;flex:1;";

          // 🔍 toggle – растягивается на всю высоту плашки слоёв
          const toggleBtn = L.DomUtil.create("button", "", right);
          toggleBtn.innerHTML = "🔍";
          toggleBtn.title = "Вкл/выкл зум колёсиком";
          toggleBtn.style.cssText =
            "width:50px;flex:1;background:white;border:2px solid rgba(0,0,0,0.2);border-radius:4px;cursor:pointer;font-size:22px;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 5px rgba(0,0,0,0.15);";

          const updateToggle = () => {
            toggleBtn.style.opacity = map.scrollWheelZoom.enabled()
              ? "1"
              : "0.4";
          };
          updateToggle();

          L.DomEvent.on(toggleBtn, "click", () => {
            if (map.scrollWheelZoom.enabled()) {
              map.scrollWheelZoom.disable();
            } else {
              map.scrollWheelZoom.enable();
            }
            updateToggle();
          });
          map.on("zoomEnabled zoomDisabled", updateToggle);

          // +/- column — такой же высоты как кнопка и плашка слоёв
          const zoomCol = L.DomUtil.create("div", "", right);
          zoomCol.style.cssText =
            "display:flex;flex-direction:column;gap:0;flex:1;";

          const zoomIn = L.DomUtil.create("button", "", zoomCol);
          zoomIn.innerHTML = "+";
          zoomIn.title = "Приблизить";
          zoomIn.style.cssText =
            "width:34px;flex:1;background:white;border:2px solid rgba(0,0,0,0.2);border-bottom:none;border-radius:4px 4px 0 0;cursor:pointer;font-size:18px;font-weight:700;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 5px rgba(0,0,0,0.15);line-height:1;";
          L.DomEvent.on(zoomIn, "click", () => map.zoomIn());

          const zoomOut = L.DomUtil.create("button", "", zoomCol);
          zoomOut.innerHTML = "−";
          zoomOut.title = "Отдалить";
          zoomOut.style.cssText =
            "width:34px;flex:1;background:white;border:2px solid rgba(0,0,0,0.2);border-top:none;border-radius:0 0 4px 4px;cursor:pointer;font-size:18px;font-weight:700;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 5px rgba(0,0,0,0.15);line-height:1;";
          L.DomEvent.on(zoomOut, "click", () => map.zoomOut());

          L.DomEvent.disableClickPropagation(container);
          return container;
        },
      });

      new CustomLayers().addTo(map);
    }, 0);

    return () => clearTimeout(timer);
  }, [map]);

  return null;
};

export default LayerControl;
