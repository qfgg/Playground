var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var minimist = require('minimist');
var autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var dependencies = Object.keys(JSON.parse(fs.readFileSync('package.json')).dependencies);
var env = minimist(process.argv.slice(2)).env;
var deployEnv = minimist(process.argv.slice(2)).deployEnv;
var app = path.join(__dirname + '/src');

var config = {
  context: app,
  entry: {
    app: [
      './app/app.jsx'
    ],
    vendors: dependencies
  },
  output: {
    path: path.resolve(__dirname, './static/assets'),
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]'
      }
    },{
      test: /\.ico$/,
      loader: 'file-loader?name=[name].[ext]'
    },{
      test: /\.(png|jpg|gif)$/i,
      loader: 'file-loader',
      options: {
        name: 'images/[name].[ext]'
      }
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader?cacheDirectory'
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    // es tree-shaking
    mainFields: ['jsnext:main', 'browser', 'main'],
    modules: [app, "node_modules"],
    alias: {
      'moment': 'moment/min/moment.min.js'
    }
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    // new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en|ko|ja|zh-cn)$/),
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.js'
    }),
    new ExtractTextPlugin('style/app.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(env.env),
        'DEPLOY_ENV': JSON.stringify(env.deployEnv)
      }
    })
  ]
}

module.exports = function(env) {
  env = env.env || "local";
  return require("./config/webpack.config." + env + ".js")(env, config);
};