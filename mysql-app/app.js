var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//for MYSQL connection config

var mySqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demo-app-db"
});
mySqlConnection.connect(function(error){
  if(!error){
    console.log("Connected to MySQL");
  }else{
    console.log(error);
  }
}); 

app.use('/', index);
app.use('/users', users);
app.use('/api/users', function(req, res){
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
})





//for MYSQL -- http://localhost:3000/api/users - GET request

// app.use('/api/users', function(req, res, next){

//   mySqlConnection.query("SELECT * from users", function(error, rows, fields){
//     if(!error){
//       console.log(rows);
//       console.log(fields);
//       res.send(rows);
//     }else{
//       console.log(error);
//       res.send(error);
//     }
//     mySqlConnection.end();
//   });
// }); 

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
