const paths = require('./paths')
const UglifyJSPlugin = require('uglify-js-plugin')


module.exports = function getWebpackConfig(webpackEnv) {
  const isEnvProduction = webpackEnv === 'production'
  const isEnvDevelopment = webpackEnv === 'development'

  return  {
    mode: webpackEnv,
    entry: paths.appIndexJs,
    devtool: isEnvDevelopment ?'cheap-module-source-map':'source-map',
    output: {
       path: paths.appBuild ,
       pathinfo: isEnvDevelopment,
       filename: isEnvProduction
         ? 'static/js/[name].[hash].js'
         :  'static/js/bundle.js',
       chunkFilename: isEnvProduction
         ? 'static/js/[name].[contenthash:8].chunk.js'
         : 'static/js/[name].chunk.js',
       publicPath: isEnvProduction ? paths.publicUrlOrPath : undefined,
    },
    resolve: {
      extensions: paths.moduleFileExtensions.map(ext => `.${ext}`),
      alias: {
        '@': paths.appSrc
      }
    },
    module: {
      rules: [
        { test: /\.(ts|tsx|js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
        { test: /\.css$/, use: ["style-loader","css-loader"]}, 
        { test: /\.(png|svg|jpg|gif)$/, loader: "file-loader"},
        { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']}
      ],
    },
    plugins: [
      isEnvProduction &&  new UglifyJSPlugin({sourceMap: true}),
      isEnvProduction &&  new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ].filter(Boolean)
  }
}



