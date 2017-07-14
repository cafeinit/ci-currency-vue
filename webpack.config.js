/**
 * @fileoverview webapck
 * @author burning (www.cafeinit.com)
 * @version 2017.07.14
 */

const path = require('path')
// const webpack = require('webpack')

module.exports = {
  entry: {
    'ci-currency': './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
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
  }
}
