const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "js/[name].js?[hash]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      title: "PDIS Design System Color Generator",
      minify: false,
      types: [
        "brand",
        "accent",
        "positive",
        "negative",
        "information",
        "warning",
      ],
    }),
  ],
};