const webpackMerge = require("webpack-merge");
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {module: {}};

//In order to get rid of the '__REACT_HOT_LOADER__.register' in compressed app.js
//It should define NODE_ENV before babel-loader working, Since DefinePlugin transforms code
//parsed by webpack after all loaders. It doesn't do anything to the global environment.
//see https://github.com/webpack/webpack/issues/2121
process.env.NODE_ENV = 'production';

const plugins = [
  new webpack.optimize.UglifyJsPlugin({
  	beautify: false,
  	comments: false,
  	compress: {
  	  warnings: false,
  	  drop_console: true,
  	  collapse_vars: true,
  	  reduce_vars: true,
  	}
  }),
  new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  })
];

const styleRules = [{
  test: /\.less$/,
  exclude: /node_modules/,
  loader: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: ['css-loader?minimize', {
      loader: 'postcss-loader',
      options: {
        plugins: function() {
          return [
            require('autoprefixer')
          ];
        }
      }
    }, 'less-loader'],
    publicPath: '../'
  })
}]


config.plugins = plugins;
config.module.rules = styleRules;

module.exports = function(env, defaultConfig) {
  return webpackMerge(defaultConfig, config);    // ../webpack.config.js and merge
};