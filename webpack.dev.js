const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    inline: true,
      proxy: {

          // Uncomment for local development, and comment out the next block
          '/api': {
            target: 'http://localhost:8888',
            pathRewrite: { '^/api': '' }
          }
          // '/api': {
          //     target: 'http://138.68.242.72:3008'
          // }
      }
  },
});
