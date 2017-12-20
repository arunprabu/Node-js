var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var contacts = require('./routes/contacts');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/contacts', contacts);

//for MYSQL connection config
/*
var mySqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "usermanager"
});
mySqlConnection.connect(function(error){
  if(!error){
    console.log("Connected to MySQL");
  }else{
    console.log(error);
  }
}); */

//for MYSQL -- http://localhost:3000/api/users - GET request
/*
app.use('/api/users', function(req, res, next){
  mySqlConnection.query("SELECT * from users", function(error, rows, fields){
    if(!error){
      console.log(rows);
      console.log(fields);
      res.send(rows);
    }else{
      console.log(error);
      res.send(error);
    }
    mySqlConnection.end();
  });
}); */

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
  res.render('error');
});

module.exports = app;
