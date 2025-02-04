const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './client/index.js',
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Production',
          template: "./client/index.html",
          filename: "index.html", // Explicit filename
        }),
        new MiniCssExtractPlugin({
          filename: "[name].[contenthash].css",
        }),
      ],
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'index.bundle.js',
        clean: true,
        publicPath: '/'
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
            type: "asset/resource",
          },
        ],
      },
    
}