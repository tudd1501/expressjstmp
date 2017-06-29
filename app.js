var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var promise = require('promise');
var session = require("express-session");
const MongoStore = require('connect-mongo')(session);
var assert = require("assert");

//Require Logger
require("./commons/Logger");

//Require Module
require("./config/singleton.js");

//Database Config
var DatabaseConfig = require("./config/database");

var index = require('./routes/index');

var app = express();

/// Connect MongoDB
mongoose.connect(DatabaseConfig.MongoDB.uri, DatabaseConfig.MongoDB.options, function(err) {
    if (err)
        express.Logger.log(err);
    else
        express.Logger.log("Connected to MongoDB");
});

app.use(require('express-session')({
    secret: 'This is a secret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: new MongoStore({ url: DatabaseConfig.MongoDB.url }),
    resave: true,
    saveUninitialized: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // set up ejs for templating
app.engine('html', require('ejs').renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.send(res.locals);
});

module.exports = app;
