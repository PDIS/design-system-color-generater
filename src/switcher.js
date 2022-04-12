import {
  argbFromHex,
  hexFromArgb,
  CorePalette,
  Blend,
} from "@material/material-color-utilities";
import "./scss/switcher.scss";

document.body.insertAdjacentHTML(
  "beforeend",
  '<button id="switcher" type="button" class="btn btn-secondary switcher">⚙️</button><div id="switcher-content"><button type="button" class="btn-close" id="switcher-close"></button><br><input type="color" class="form-control form-control-color" id="s-brand" value="#2c5ab4" onchange="update(this)"/><p class="d-inline">Brand</p><br><input type="color" class="form-control form-control-color" id="s-accent" value="#705D00" onchange="update(this)"/><p class="d-inline">Accent</p><br><input type="color" class="form-control form-control-color" id="s-information" value="#006687" onchange="update(this)"/><p class="d-inline">Information</p><br><input type="color" class="form-control form-control-color" id="s-warning" value="#A53D00" onchange="update(this)"/><p class="d-inline">Warning</p></div>'
);

document.getElementById("switcher").addEventListener("click", () => {
  document.getElementById("switcher-content").style.display = "block";
});

document.getElementById("switcher-close").addEventListener("click", () => {
  document.getElementById("switcher-content").style.display = "none";
});

function themeFromSourceColor(brand, accent, information, warning) {
  const result = {
    tonalPalettes: {},
    light: {},
    dark: {},
  };

  const brand_core = CorePalette.of(argbFromHex(brand));
  const accent_core = CorePalette.of(
    Blend.harmonize(argbFromHex(accent), argbFromHex(brand))
  );
  const positive_core = CorePalette.of(
    Blend.harmonize(argbFromHex("#286B2A"), argbFromHex(brand))
  );
  const information_core = CorePalette.of(
    Blend.harmonize(argbFromHex(information), argbFromHex(brand))
  );
  const warning_core = CorePalette.of(
    Blend.harmonize(argbFromHex(warning), argbFromHex(brand))
  );
  const colors = {
    brand: brand_core.a1,
    accent: accent_core.a1,
    positive: positive_core.a1,
    negative: brand_core.error,
    information: information_core.a1,
    warning: warning_core.a1,
    netural: brand_core.n1,
    neutralvariant: brand_core.n2,
  };
  const tones = [
    0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100,
  ];
  Object.entries(colors).forEach(([key, value]) => {
    result.tonalPalettes[key] = {};
    tones.forEach((t) => {
      result.tonalPalettes[key]["tone" + t] = hexFromArgb(value.tone(t));
    });
  });
  return result;
}

function update(e) {
  const brand = document.getElementById("s-brand").value;
  const accent = document.getElementById("s-accent").value;
  const information = document.getElementById("s-information").value;
  const warning = document.getElementById("s-warning").value;
  const result = themeFromSourceColor(brand, accent, information, warning);

  Object.entries(result.tonalPalettes).forEach(([color_name, tunes]) => {
    document.documentElement.style.setProperty(`--${color_name}`, tunes.tone40);
    document.documentElement.style.setProperty(`--${color_name}-strong`, tunes.tone30);
    document.documentElement.style.setProperty(`--on-${color_name}`, tunes.tone100);
    document.documentElement.style.setProperty(`--${color_name}-flat`, tunes.tone90);
    document.documentElement.style.setProperty(`--${color_name}-flat-strong`, tunes.tone80);
    document.documentElement.style.setProperty(`--on-${color_name}-flat`, tunes.tone10);
  });

  document.documentElement.style.setProperty(`--background`, result.tonalPalettes.netural.tone99);
  document.documentElement.style.setProperty(`--on-background`, result.tonalPalettes.netural.tone10);
  document.documentElement.style.setProperty(`--surface`, result.tonalPalettes.netural.tone99);
  const surface =result.tonalPalettes.netural.tone99;
  const mask = result.tonalPalettes.brand.tone40;
  document.documentElement.style.setProperty(`--surface-1`, colorMix(surface, mask, 0.05));
  document.documentElement.style.setProperty(`--surface-2`, colorMix(surface, mask, 0.08));
  document.documentElement.style.setProperty(`--surface-3`, colorMix(surface, mask, 0.11));
  document.documentElement.style.setProperty(`--surface-4`, colorMix(surface, mask, 0.12));
  document.documentElement.style.setProperty(`--surface-5`, colorMix(surface, mask, 0.14));
  document.documentElement.style.setProperty(`--on-surface`, result.tonalPalettes.netural.tone10);
  document.documentElement.style.setProperty(`--surface-variant`, result.tonalPalettes.neutralvariant.tone90);
  document.documentElement.style.setProperty(`--on-surface-variant`, result.tonalPalettes.neutralvariant.tone30);
  document.documentElement.style.setProperty(`--outline`, result.tonalPalettes.neutralvariant.tone50);

}

function colorMix(bg, mask, optical) {
  const alpha = 1 - optical;
  bg = hexToRGB(bg);
  mask = hexToRGB(mask);
  const red = Math.round(
    (optical * (mask.red / 255) + alpha * (bg.red / 255)) * 255
  );
  const green = Math.round(
    (optical * (mask.green / 255) + alpha * (bg.green / 255)) * 255
  );
  const blue = Math.round(
    (optical * (mask.blue / 255) + alpha * (bg.blue / 255)) * 255
  );
  return rgbToHex(red, green, blue);
}

function hexToRGB(hex) {
  return {
    red: parseInt(hex[1] + hex[2], 16),
    green: parseInt(hex[3] + hex[4], 16),
    blue: parseInt(hex[5] + hex[6], 16),
  };
}
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

window.update = function () {
  update();
};
update();
