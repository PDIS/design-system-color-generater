const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css?[hash]',
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
  ],
};
