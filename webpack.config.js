const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const webpack = require("webpack");

module.exports = {
  target: "node",
  entry: {
    main: "./src/main.js",
    switcher: "./src/switcher.js",
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "js/[name].js?[hash]",
  },

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css?[hash]",
    }),
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
    new webpack.DefinePlugin({
      "process.env.SWITCHER_HTML": JSON.stringify(
        fs.readFileSync("./src/switcher.html",  {encoding:'utf8'})
      ),
    }),
  ],
};
