import {
  argbFromHex,
  hexFromArgb,
  CorePalette,
  Blend,
} from "@material/material-color-utilities";

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

function update() {
  const brand = document.getElementById("brand").value;
  const accent = document.getElementById("accent").value;
  const information = document.getElementById("information").value;
  const warning = document.getElementById("warning").value;
  const result = themeFromSourceColor(brand, accent, information, warning);
  Object.entries(result.tonalPalettes).forEach(([color_name, tunes]) => {
    Object.entries(tunes).forEach(([tune, color_hex]) => {
      $(`div.${color_name}.${tune}`).css("background-color", color_hex);
      $(`div.${color_name}.text-${tune}`).css("color", color_hex);

      $(`span.${color_name}.${tune}`).html(
        `<i class="bi bi-square-fill"></i>${color_hex}`
      );
      $(`span.${color_name}.${tune} i`).css("color", color_hex);
    });
  });

  [99, 10].forEach((n) => {
    const surface =
      n == 99
        ? result.tonalPalettes.netural.tone99
        : result.tonalPalettes.netural.tone10;
    const mask =
      n == 99
        ? result.tonalPalettes.brand.tone40
        : result.tonalPalettes.netural.tone80;
    [5, 8, 11, 12, 14].forEach((e) => {
      const c = colorMix(surface, mask, e / 100);
      $(`div.netural.tone${n}.surface${e}`).css("background-color", c);
      $(`span.netural.tone${n}.surface${e}`).html(
        `<i class="bi bi-square-fill"></i>${c}`
      );
      $(`span.netural.tone${n}.surface${e} i`).css("color", c);
    });
  });
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
