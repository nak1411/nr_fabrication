/**
 * © 2018 Justin Schlump
 * NakDev Webpack Config File
 * Using vue.js
 */

// Update imports as needed per project 
const path = require('path');
const webpack = require('webpack');
const {
  VueLoaderPlugin
} = require('vue-loader')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MinifyPlugin = require('babel-minify-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Update plugins as needed per project..ie.(moment.js)
const pluginsProd = [new VueLoaderPlugin(), new BundleAnalyzerPlugin(), new MiniCssExtractPlugin({
  filename: 'main.css'
}), new MinifyPlugin(), new OptimizeCSSAssetsPlugin(), new HtmlWebpackPlugin({
  template: 'src/index.html'
})];
const pluginsDev = [new VueLoaderPlugin(), new HtmlWebpackPlugin({
  template: 'src/index.html'
}), new MiniCssExtractPlugin({
  filename: 'main.css'
}), new HardSourceWebpackPlugin()];

// Checking mode to apply correct settings
const isProd = process.env.NODE_ENV === 'production';
const toolProd = '';
const toolDev = 'eval';
const plugins = isProd ? pluginsProd : pluginsDev;
const devtool = isProd ? toolProd : toolDev;

//----------------------------------------------------------------------------------------

module.exports = {
  devtool: devtool,
  entry: ['babel-polyfill', './src/js/main.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: plugins,
  module: {
    rules: [{
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'img/[name].[ext]'
          }
        }]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
};