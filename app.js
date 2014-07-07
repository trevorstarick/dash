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

app.get('/', function(req, res) {
  res.render('layout', {
    pages: ['home', 'about', 'users']
  });
});

app.listen(3000);