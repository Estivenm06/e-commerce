const {merge} = require('webpack-merge')
const common = require('./webpack.common.cjs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') 

module.exports = merge(common, {
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ]
    }
})

/*
module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
  s        type: "asset/resource",
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
};
*/