require('babel-core/register');
var fs = require('fs.extra');

var webpack = require('webpack');

var config = require('./webpack.config.production.js').default;

webpack(config, function (_error, stats) {
  var manifest = stats.toJson().assetsByChunkName;
  fs.writeFile('webpack-manifest.json', JSON.stringify(manifest));
});
