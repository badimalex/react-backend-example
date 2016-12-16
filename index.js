require('babel-register');
require('./render');
var result = require('./render').default;
var express = require('express');
var application = express();

application.get('/', function(req, res) {
  res.send(result);
});

application.listen(3005);
