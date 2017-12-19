var express = require('express');
var contactService = require('../services/contactsService');

var router = express.Router();

var contacts = [
  {
    fullName: "Arun",
    phoneNo: 345324,
    email: 'arun@example.com'
  },
  {
    fullName: "Prabu",
    phoneNo: 56435,
    email: 'prabu@example.com'
  }
]
/* GET contacts page. */
//http://localhost:3000/api/contacts
router.get('/', function(req, res, next) {
  res.send(contacts);
});

//http://localhost:3000/api/contacts/add
router.post('/add', function(req, res, next) {
  console.log(req.body);
  //  Step 1: Pass it to Service
  contactService.addContact(req.body, function(err, status){
    //Step 6: send the response back to the front end 
    res.send(status);
  });  
});

/* GET contacts/contactId page. */
//http://localhost:3000/api/contacts/2
router.get('/:contactId', function(req, res, next) {
  var _contact = {
    contactId: req.params.contactId,
    name: "Arun"
  }
  res.send(_contact);
});


module.exports = router;
