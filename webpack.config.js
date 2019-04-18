var path = require('path');
var webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/App.js',
    mode: 'development',
    
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ["babel-loader"]
    },{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  "output": {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },

  devServer: {
   
    port: 8000,
    contentBase: path.resolve(__dirname, 'build'),
    watchContentBase: true,
    filename: 'index.html'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './build/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};