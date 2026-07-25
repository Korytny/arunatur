import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

const isDark = () => document.documentElement.classList.contains("dark");

const LayerControl = () => {
  const map = useMap();

  useEffect(() => {
    const timer = setTimeout(() => {
      const layers = (window as any).layers;
      if (!layers) return;

      const dark = isDark();

      const bg = dark ? "#1c1f2b" : "white";
      const text = dark ? "#e2e8f0" : "inherit";
      const border = dark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.2)";
      const shadow = dark
        ? "0 1px 5px rgba(0,0,0,0.4)"
        : "0 1px 5px rgba(0,0,0,0.15)";

      const baseBtn = `background:${bg};border:2px solid ${border};cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:${shadow};color:${text};`;

      // ——— Custom control ———
      const CustomLayers = L.Control.extend({
        options: { position: "topright" },

        onAdd() {
          const container = L.DomUtil.create("div");
          container.style.cssText =
            "display:flex;flex-direction:row;align-items:stretch;gap:4px;";

          // ——— Layer checkboxes ———
          const left = L.DomUtil.create("div", "", container);
          left.style.cssText = [
            `display:flex;flex-direction:column;gap:2px;`,
            `background:${bg};border:2px solid ${border};`,
            `border-radius:4px;padding:8px 10px;`,
            `box-shadow:${shadow};font-size:13px;line-height:1.6;color:${text};`,
          ].join("");

          Object.entries(layers).forEach(([, val]: [string, any]) => {
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

          // ——— RIGHT: buttons ———
          const right = L.DomUtil.create("div", "", container);
          right.style.cssText =
            "display:flex;flex-direction:row;align-items:stretch;gap:4px;flex:1;";

          // 🔍 toggle
          const toggleBtn = L.DomUtil.create("button", "", right);
          toggleBtn.innerHTML = "🔍";
          toggleBtn.title = "Вкл/выкл зум колёсиком";
          toggleBtn.style.cssText = `width:50px;flex:1;${baseBtn}border-radius:4px;font-size:22px;`;

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

          // +/- column
          const zoomCol = L.DomUtil.create("div", "", right);
          zoomCol.style.cssText = "display:flex;flex-direction:column;gap:0;flex:1;";

          const zoomIn = L.DomUtil.create("button", "", zoomCol);
          zoomIn.innerHTML = "+";
          zoomIn.title = "Приблизить";
          zoomIn.style.cssText = `width:34px;flex:1;${baseBtn}border-radius:4px 4px 0 0;border-bottom:none;font-size:18px;font-weight:700;line-height:1;`;
          L.DomEvent.on(zoomIn, "click", () => map.zoomIn());

          const zoomOut = L.DomUtil.create("button", "", zoomCol);
          zoomOut.innerHTML = "−";
          zoomOut.title = "Отдалить";
          zoomOut.style.cssText = `width:34px;flex:1;${baseBtn}border-radius:0 0 4px 4px;border-top:none;font-size:18px;font-weight:700;line-height:1;`;
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
