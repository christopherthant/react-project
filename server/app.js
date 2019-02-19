var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
var indexRouter = require('./routes/index');

// DB connection
mongoose.connect('mongodb://localhost:27017/data', {useNewUrlParser: true});

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// enable CORS headers for development
console.log(process.env.DEVELPOPMENT);
if (process.env.DEVELPOPMENT === 'TRUE') {
    app.use(cors());
}

app.use('/', indexRouter);

module.exports = app;
