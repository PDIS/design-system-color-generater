const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "material-color-utilities-webpack.js",
    path: path.resolve(__dirname, "dist/js"),
  },
};
