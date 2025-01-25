'use scric'
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',  
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.bundle.js",
    publicPath: '/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html', // Explicit filename
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./client/src/components"),
      "@styles": path.resolve(__dirname, "./client/src/styles"),
    },
    extensions: [".js", ".jsx"],
  },
};