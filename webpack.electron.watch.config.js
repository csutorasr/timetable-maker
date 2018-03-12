const dev = require('./webpack.electron.config');
module.exports = Object.assign({}, dev, {
  watch: true,
});
