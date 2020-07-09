
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const Config = require('./config')
const config = Config('production')

module.exports = {
  ...config,
  module: {
    rules: [
      { test: /\.(ts|tsx|js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: ["style-loader","css-loader"]}, 
      { test: /\.(png|svg|jpg|gif)$/, loader: "file-loader"},
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']}
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template: 'public/index.html'}),
  ],
};



