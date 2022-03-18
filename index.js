import {
  argbFromHex,
  themeFromSourceColor,
  hexFromArgb,
  CorePalette,
} from "@material/material-color-utilities";

window.themeFromSourceColor = function (a, b) {
  const result = {
    tonalPalettes: {},
    light: {},
    dark: {},
  };
  const core = CorePalette.of(argbFromHex(a));
  const positive = CorePalette.of(argbFromHex("#286B2A"));
  const colors = {
    brand: core.a1,
    accent: core.a2,
    negative: core.error,
    positive: positive.a1,
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
  console.log(result);
  /*
  Object.entries(theme.schemes.light.props).forEach(([key, value]) => {
    result.light[key] = hexFromArgb(value);
  });
  Object.entries(theme.schemes.dark.props).forEach(([key, value]) => {
    result.dark[key] = hexFromArgb(value);
  });*/
  return result;
};
