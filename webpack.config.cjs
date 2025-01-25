'use scric'
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'development',  
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
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader', options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader', options: {
              sourceMap: true
            }
          }
        ]
      },
    ],
  },
  devServer: {
    port: 3000,
    static: path.join(__dirname, "./dist"),
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3001'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html', // Explicit filename
    }),
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./client/src/components"),
      "@styles": path.resolve(__dirname, "./client/src/styles"),
    },
    extensions: [".js", ".jsx"],
  },
};
