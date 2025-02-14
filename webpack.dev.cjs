"use scric";

const path = require('path')
const {merge} = require('webpack-merge')
const common = require('./webpack.common.cjs')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    static: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:3001'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Ɲova Market",
      template: "./index.html",
      open: true,
      favicon: "./client/src/components/Header/LOGO.webp",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader", 
          "css-loader"
        ],
      },
      {
        test: /\.s[ca]ss$/i,
        use: [
          "style-loader", 
          "css-loader", 
          "sass-loader"
        ],
        exclude: /node_modules/
      }
    ]
  }
})