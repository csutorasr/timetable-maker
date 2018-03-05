const dev = require('./webpack.electron.config');
const webpack = require('webpack');

module.exports = Object.assign({}, dev, {
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/\.\/environment\.dev/, './environment.prod'),
  ],
});
