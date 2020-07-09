
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack')
const Config = require('./webpack.config')

const config = Config('development')


module.exports = {
  // mode: 'development',
  // entry: './src/index.tsx', 
  // output: {
  //   filename: '[name].[hash].js',
  //   path: path.resolve('dist'),
  // },
  // devtool: 'inline-source-map',
   // resolve: {
  //   extensions: [".js", ".jsx", ".ts", ".tsx"],
  //   alias: {
  //     '@': path.resolve('src')
  //   }
  // },
  ...config,
  devServer: {
    contentBase: './dist', // 资源地址
    compress: true, // 文件是否压缩
    host: 'localhost',
    https: true,
    open: true, // 打开浏览器
    quiet: true, // 控制台不输出打包的bundle.js信息
    overlay: true, // 错误的时候是否需要遮罩层
    port: 9000,
    progress: true
  },
  // module: {
  //   rules: [
  //     { test: /\.(ts|tsx|js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
  //     { test: /\.css$/, use: ["style-loader","css-loader"]}, 
  //     { test: /\.(png|svg|jpg|gif)$/, loader: "file-loader"},
  //     { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']}
  //   ],
  // },
  // plugins: [
  //   new CleanWebpackPlugin(),
  //   new HtmlWebpackPlugin({template: 'public/index.html'}),
  //   new webpack.NamedModulesPlugin(),
  //   new webpack.HotModuleReplacementPlugin()
  // ],
};



