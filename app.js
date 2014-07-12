var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

var hbs = require('hbs');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(bodyParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var blocks = {};

hbs.registerHelper('extend', function(name, context) {
  var block = blocks[name];
  if (!block) {
    block = blocks[name] = [];
  }

  block.push(context.fn(this));
});

hbs.registerHelper('block', function(name) {
  var val = (blocks[name] || []).join('\n');

  blocks[name] = [];
  return val;
});

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000);