var express = require('express');
var router = express.Router();

var usersData = {
  title: "My Users List",
  username: "Arun",
  city: "Chennai",
  skills: "HTML, CSS"
}
/* GET users listing. */
//http://localhost:3000/users
router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
  //res.render('users', usersData );
  res.send(usersData);
});

module.exports = router;
