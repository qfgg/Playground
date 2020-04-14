var webpackMerge = require("webpack-merge");
var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  module: {},
  devServer: {
    host: '0.0.0.0',
    hot: true,
    // Version above 2.4.5 shpuld be open
    disableHostCheck: true,
    inline: true,
    // port: '80',
  },
};

config.devtool = 'source-map';

const plugins = [
  new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/),
  new webpack.LoaderOptionsPlugin({
    debug: true
  })
];

const styleRules = [{
    test: /\.(js|jsx)$/,
    exclude: [
      path.resolve(__dirname, "../node_modules"),
      path.resolve(__dirname, "../src/lib"),
      path.resolve(__dirname, "../src/app/components/Chart")
    ],
    enforce: "pre",
    loader: 'eslint-loader'
  }, {
  test: /\.less$/,
  exclude: /node_modules/,
  loader: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: [{
      loader: 'css-loader',
      options: { sourceMap: true, importLoaders: 1 }
    }, {
      loader: 'postcss-loader',
      options: {
        sourceMap: 'inline',
        plugins: function() {
          return [
            require('autoprefixer')
          ];
        }
      }
    }, {
      loader: 'less-loader',
      options: { sourceMap: true }
    }],
    publicPath: '../'
  })
}];

config.plugins = plugins;
config.module.rules = styleRules;

module.exports = function(env, defaultConfig) {
  return webpackMerge(defaultConfig, config);    // ../webpack.config.js and merge
};
