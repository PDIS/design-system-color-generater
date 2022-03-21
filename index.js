import {
  argbFromHex,
  hexFromArgb,
  CorePalette,
  Blend,
} from "@material/material-color-utilities";

window.themeFromSourceColor = function (brand, accent, information, warning) {
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
  };
  const tones = [
    0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100,
  ];
  Object.entries(colors).forEach(([key, value]) => {
    result.tonalPalettes[key] = {};
    tones.forEach((t) => {
      result.tonalPalettes[key]["tone" + t] = hexFromArgb(value.tone(t));
    });

    result.light[key] = result.tonalPalettes[key].tone40;
    result.light[`${key}-strong`] = result.tonalPalettes[key].tone30;
    result.light[`on-${key}`] = result.tonalPalettes[key].tone100;
    result.light[`${key}-flat`] = result.tonalPalettes[key].tone90;
    result.light[`${key}-flat-strong`] = result.tonalPalettes[key].tone80;
    result.light[`on-${key}-flat`] = result.tonalPalettes[key].tone10;

    result.dark[key] = result.tonalPalettes[key].tone80;
    result.dark[`${key}-strong`] = result.tonalPalettes[key].tone70;
    result.dark[`on-${key}`] = result.tonalPalettes[key].tone20;
    result.dark[`${key}-flat`] = result.tonalPalettes[key].tone30;
    result.dark[`${key}-flat-strong`] = result.tonalPalettes[key].tone20;
    result.dark[`on-${key}-flat`] = result.tonalPalettes[key].tone90;
  });
  return result;
};
