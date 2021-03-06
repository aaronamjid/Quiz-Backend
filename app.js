var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var indexrouter = require('./routes');
var viewrouter = require('./views');
var db = require('./config/db');
var ejs = require('ejs');


var app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api',indexrouter);
app.use('/',viewrouter);
db.connect();

module.exports = app;
