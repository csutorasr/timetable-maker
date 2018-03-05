const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: { server: './electron/main.ts' },
  resolve: { extensions: ['.js', '.ts'] },
  target: 'electron-main',
  // this makes sure we include node_modules and other 3rd party libraries
  externals: [/(node_modules|main\..*\.js)/],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'electron.js'
  },
  node: {
    __dirname: false,
    __filename: false
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
};
