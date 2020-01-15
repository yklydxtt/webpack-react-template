const path = require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
      app:'./src/index.js',
      snabbdom:'./src/snabbdom.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000,
      hot:true
    },
    module:{
      rules:[{
        test:/\.css$/,
        use:['style-loader','css-loader']
      }]
    },
    plugins:[
      new CleanWebpackPlugin(),
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
}