/* eslint-disable no-console */
const path = require('path');
require('app-module-path').addPath(path.join(process.cwd(), 'src'));

require('./globals');
require('babel-core/register');

require.extensions['.css'] = () => {
  return;
};

const port = 3000;
const express = require('express');
const morgan = require('morgan');
const application = express();

application.use(morgan('dev'));
application.use(express.static('src/static'));

application.set('views', __dirname);
application.set('view engine', 'ejs');

const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware');
const config = require('../../webpack.config.js').default;
const webpackHot = require('webpack-hot-middleware');
const compiler = webpack(config);

application.use(
  webpackDev(
    compiler,
    {
      hot: true,
      publicPath: config.output.publicPath,
      stats: { colors: true }
    }
  )
);

application.use(webpackHot(compiler));

application.get('*', require('./render').default);

application.listen(port, function() {
  console.log(`Server listening on ${port}`);
});
