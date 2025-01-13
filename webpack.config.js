const path = require("path");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "/client/dist"),
    filename: "index.bundle.js",
  },
  devServer: {
    port: 3002,
    static: path.resolve(__dirname, "./client/src"),
    historyApiFallback: true
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./client/src/components"),
      "@styles": path.resolve(__dirname, "./client/src/styles"),
    },
    extensions: [".js", ".jsx"],
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
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
