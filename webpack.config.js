const path               = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
  entry    : './src/emulator/emulator.ts',
  output   : {
    filename: 'bundle.js',
    path    : path.resolve(__dirname, 'dist')
  },
  resolve  : {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins  : [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/templates/index.hbs"),
    })
  ],
  module   : {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {test: /\.tsx?$/, loader: 'ts-loader'},
      {test: /\.hbs$/, loader: "handlebars-loader"}
    ]
  },
  devServer: {
    hot               : true,
    contentBase       : path.join(__dirname, "dist"),
    historyApiFallback: true,
    open              : true,
    watchContentBase  : true
  }
};
