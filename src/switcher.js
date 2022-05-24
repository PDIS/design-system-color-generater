import {
  argbFromHex,
  hexFromArgb,
  CorePalette,
  Blend,
} from "@material/material-color-utilities";
import "./scss/switcher.scss";

document.body.insertAdjacentHTML("beforeend", process.env.SWITCHER_HTML);

document.getElementById("switcher").addEventListener("click", () => {
  document.getElementById("switcher-content").style.display = "block";
});

document.getElementById("switcher-close").addEventListener("click", () => {
  document.getElementById("switcher-content").style.display = "none";
});

document.getElementById("darkmode").addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.classList.add("darkmode");
  } else {
    document.body.classList.remove("darkmode");
  }
});

function themeFromSourceColor(brand, accent, information, warning) {
  const result = {
    tonalPalettes: {},
    light: {},
    dark: {},
  };

  const brand_core = CorePalette.of(argbFromHex(brand));
  const accent_core = CorePalette.of(argbFromHex(accent));
  const positive_core = CorePalette.of(argbFromHex("#286B2A"));
  const information_core = CorePalette.of(argbFromHex(information));
  const warning_core = CorePalette.of(argbFromHex(warning));
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

  const surface = result.tonalPalettes.netural.tone99;
  const mask = result.tonalPalettes.brand.tone40;
  const d_surface = result.tonalPalettes.netural.tone10;
  const d_mask = result.tonalPalettes.brand.tone80;

  try {
    document.getElementById("color").remove();
  } catch(e) {}
  var css = document.createElement("style");
  css.id = "color";
  css.appendChild(
    document.createTextNode(`
  :root {
    --brand: ${result.tonalPalettes.brand.tone40};
    --brand-strong: ${result.tonalPalettes.brand.tone30};
    --on-brand: ${result.tonalPalettes.brand.tone100};
    --brand-flat: ${result.tonalPalettes.brand.tone90};
    --brand-flat-strong: ${result.tonalPalettes.brand.tone80};
    --on-brand-flat: ${result.tonalPalettes.brand.tone10};
    --accent: ${result.tonalPalettes.accent.tone40};
    --accent-strong: ${result.tonalPalettes.accent.tone30};
    --on-accent: ${result.tonalPalettes.accent.tone100};
    --accent-flat: ${result.tonalPalettes.accent.tone90};
    --accent-flat-strong: ${result.tonalPalettes.accent.tone80};
    --on-accent-flat: ${result.tonalPalettes.accent.tone10};
    --positive: ${result.tonalPalettes.positive.tone40};
    --positive-strong: ${result.tonalPalettes.positive.tone30};
    --on-positive: ${result.tonalPalettes.positive.tone100};
    --positive-flat: ${result.tonalPalettes.positive.tone90};
    --positive-flat-strong: ${result.tonalPalettes.positive.tone80};
    --on-positive-flat: ${result.tonalPalettes.positive.tone10};
    --negative: ${result.tonalPalettes.negative.tone40};
    --negative-strong: ${result.tonalPalettes.negative.tone30};
    --on-negative: ${result.tonalPalettes.negative.tone100};
    --negative-flat: ${result.tonalPalettes.negative.tone90};
    --negative-flat-strong: ${result.tonalPalettes.negative.tone80};
    --on-negative-flat: ${result.tonalPalettes.negative.tone10};
    --information: ${result.tonalPalettes.information.tone40};
    --information-strong: ${result.tonalPalettes.information.tone30};
    --on-information: ${result.tonalPalettes.information.tone100};
    --information-flat: ${result.tonalPalettes.information.tone90};
    --information-flat-strong: ${result.tonalPalettes.information.tone80};
    --on-information-flat: ${result.tonalPalettes.information.tone10};
    --warning: ${result.tonalPalettes.warning.tone40};
    --warning-strong: ${result.tonalPalettes.warning.tone30};
    --on-warning: ${result.tonalPalettes.warning.tone100};
    --warning-flat: ${result.tonalPalettes.warning.tone90};
    --warning-flat-strong: ${result.tonalPalettes.warning.tone80};
    --on-warning-flat: ${result.tonalPalettes.warning.tone10};
    --surface: ${result.tonalPalettes.netural.tone99};
    --surface-1: ${colorMix(surface, mask, 0.05)};
    --surface-2: ${colorMix(surface, mask, 0.08)};
    --surface-3: ${colorMix(surface, mask, 0.11)};
    --surface-4: ${colorMix(surface, mask, 0.12)};
    --surface-5: ${colorMix(surface, mask, 0.14)};
    --on-surface: ${result.tonalPalettes.netural.tone10};
    --surface-variant: ${result.tonalPalettes.neutralvariant.tone90};
    --on-surface-variant: ${result.tonalPalettes.neutralvariant.tone30};
    --outline: ${result.tonalPalettes.neutralvariant.tone50};
    --background: #ffffff;
    --on-background: ${result.tonalPalettes.netural.tone10};
    --bs-body-bg: var(--background);
  }
  .darkmode {
    --brand: ${result.tonalPalettes.brand.tone80};
    --brand-strong: ${result.tonalPalettes.brand.tone90};
    --on-brand: ${result.tonalPalettes.brand.tone20};
    --brand-flat: ${result.tonalPalettes.brand.tone30};
    --brand-flat-strong: ${result.tonalPalettes.brand.tone40};
    --on-brand-flat: ${result.tonalPalettes.brand.tone90};
    --accent: ${result.tonalPalettes.accent.tone80};
    --accent-strong: ${result.tonalPalettes.accent.tone90};
    --on-accent: ${result.tonalPalettes.accent.tone20};
    --accent-flat: ${result.tonalPalettes.accent.tone30};
    --accent-flat-strong: ${result.tonalPalettes.accent.tone40};
    --on-accent-flat: ${result.tonalPalettes.accent.tone90};
    --positive: ${result.tonalPalettes.positive.tone80};
    --positive-strong: ${result.tonalPalettes.positive.tone90};
    --on-positive: ${result.tonalPalettes.positive.tone20};
    --positive-flat: ${result.tonalPalettes.positive.tone30};
    --positive-flat-strong: ${result.tonalPalettes.positive.tone40};
    --on-positive-flat: ${result.tonalPalettes.positive.tone90};
    --negative: ${result.tonalPalettes.negative.tone80};
    --negative-strong: ${result.tonalPalettes.negative.tone90};
    --on-negative: ${result.tonalPalettes.negative.tone20};
    --negative-flat: ${result.tonalPalettes.negative.tone30};
    --negative-flat-strong: ${result.tonalPalettes.negative.tone40};
    --on-negative-flat: ${result.tonalPalettes.negative.tone90};
    --information: ${result.tonalPalettes.information.tone80};
    --information-strong: ${result.tonalPalettes.information.tone90};
    --on-information: ${result.tonalPalettes.information.tone20};
    --information-flat: ${result.tonalPalettes.information.tone30};
    --information-flat-strong: ${result.tonalPalettes.information.tone40};
    --on-information-flat: ${result.tonalPalettes.information.tone90};
    --warning: ${result.tonalPalettes.warning.tone80};
    --warning-strong: ${result.tonalPalettes.warning.tone90};
    --on-warning: ${result.tonalPalettes.warning.tone20};
    --warning-flat: ${result.tonalPalettes.warning.tone30};
    --warning-flat-strong: ${result.tonalPalettes.warning.tone40};
    --on-warning-flat: ${result.tonalPalettes.warning.tone90};
    --surface: ${result.tonalPalettes.netural.tone10};
    --surface-1: ${colorMix(d_surface, d_mask, 0.05)};
    --surface-2: ${colorMix(d_surface, d_mask, 0.08)};
    --surface-3: ${colorMix(d_surface, d_mask, 0.11)};
    --surface-4: ${colorMix(d_surface, d_mask, 0.12)};
    --surface-5: ${colorMix(d_surface, d_mask, 0.14)};
    --on-surface: ${result.tonalPalettes.netural.tone90};
    --surface-variant: ${result.tonalPalettes.neutralvariant.tone30};
    --on-surface-variant: ${result.tonalPalettes.neutralvariant.tone80};
    --outline: ${result.tonalPalettes.neutralvariant.tone60};
    --background: ${result.tonalPalettes.netural.tone10};
    --on-background: ${result.tonalPalettes.netural.tone90};
    --bs-body-bg: var(--background);
  }
  `)
  );
  document.body.appendChild(css);
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
