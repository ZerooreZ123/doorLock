// https://github.com/michael-ciniawsky/postcss-load-config

var px2rem = require("postcss-px2rem");
var autoprefixer = require("autoprefixer");
module.exports = {
  plugins: [autoprefixer()]
};
