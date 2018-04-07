const path = require('path');

module.exports = {
  SRC: path.resolve('src'),
  DIST: path.resolve('dist'),
  APP: path.resolve('src/index'),
  TEMPLATE: path.resolve('webpack/template.html'),
  TEMPLATE_404: path.resolve('webpack/404.html'),
  POSTCSS: path.resolve('postcss.config.js'),
};
