"use scric";

const path = require('path')
const {merge} = require('webpack-merge')
const common = require('./webpack.common.cjs')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    static: path.join(__dirname, './dist'),
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:3001'
      }
    ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
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
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./client/src/components"),
        "@styles": path.resolve(__dirname, "./client/src/styles"),
      },
      extensions: [".js", ".jsx"],
    },
  };
*/