var path = require('path');
const nodeModulesPath = path.join(process.cwd(), 'node_modules');

require(`${nodeModulesPath}/babel-core/register`);

var fs = require(`${nodeModulesPath}/fs-extra`);

var webpack = require(`${nodeModulesPath}/webpack`);

var config = require('./production.js').default;

webpack(config, function(_error, stats) {
  var manifest = stats.toJson().assetsByChunkName;
  fs.writeFile('webpack-manifest.json', JSON.stringify(manifest));
});
