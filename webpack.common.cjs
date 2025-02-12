const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
  plugins: [
    new HtmlWebpackPlugin({
      title: "Ɲova Market",
      template: "./index.html",
      filename: "index.html",
      open: true,
      favicon: "./client/src/components/Header/LOGO.webp"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        use: ["file-loader"]
      },
      {
        test: /\.s[ca]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/
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
