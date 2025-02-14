const {merge} = require('webpack-merge')
const common = require('./webpack.common.cjs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin(),
        new HtmlWebpackPlugin({
          title: "Ɲova Market",
          template: "./index.html",
          open: true,
          favicon: "./client/src/components/Header/LOGO.webp",
          minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true
          }
        }),
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.s[ca]ss$/,
          use: [
            MiniCssExtractPlugin.loader, 
            "css-loader", 
            "sass-loader"
          ],
        },
      ]
    }
})