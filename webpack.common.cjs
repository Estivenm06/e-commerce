const path = require("path");

module.exports = {
  entry: {
    bundle: "./client/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    publicPath: "/",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        use: ['file-loader?name=[name].[ext]'],
      }
    ],
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./client/src"),
      "@components": path.resolve(__dirname, "./client/src/components"),
      "@styles": path.resolve(__dirname, "./client/src/styles"),
      "@utilComponents": path.resolve(__dirname, "./client/src/components/Header/utilComponents")
    },
    extensions: [".js", ".jsx"],
  },
};
