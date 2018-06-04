const path = require('path');

module.exports = {
  entry: "./src/js/theme.js",
  output: {
    path: path.resolve(__dirname, "static/"),
    publicPath: "/",
    filename: "theme.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
};