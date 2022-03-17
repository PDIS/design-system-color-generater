import {
  argbFromHex,
  themeFromSourceColor,
  hexFromArgb,
} from "@material/material-color-utilities";

window.themeFromSourceColor = function (a, b) {
  const theme = themeFromSourceColor(argbFromHex(a));
  const result = { light: {}, dark: {} };
  console.log(theme.schemes.light.props);
  Object.entries(theme.schemes.light.props).forEach(([key, value]) => {
    result.light[key] = hexFromArgb(value);
  });
  Object.entries(theme.schemes.dark.props).forEach(([key, value]) => {
    result.dark[key] = hexFromArgb(value);
  });
  return result;
};
