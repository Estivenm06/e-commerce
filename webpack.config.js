const path = require("path");

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, "/client/dist"),
    filename: "index.bundle.js",
  },
  devServer: {
    port: 3002,
    static: path.resolve(__dirname, './client/src')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.sass$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
