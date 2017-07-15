/**
 * @fileoverview webapck
 * @author burning (www.cafeinit.com)
 * @version 2017.07.15
 */

const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    'ci-currency': './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    library: 'CICurrency',
    libraryTarget: 'var'  // Export by setting a variable: var Library = xxx (default)
    // libraryTarget: 'amd'  // Export to AMD (optionally named - set the name via the library option)
    // libraryTarget: 'umd'  // Export to AMD, CommonJS2 or as property in root
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
}
