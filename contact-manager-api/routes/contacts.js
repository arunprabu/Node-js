var express = require('express');
var contactService = require('../services/contactsService');
var router = express.Router();

//POST for Creatin contact
//http://localhost:3000/api/contacts/add
router.post('/add', function(req, res, next) {
  console.log(req.body);
  //  Step 1: Pass it to Service
  contactService.addContact(req.body, function(err, status){
    //Step 6: send the response back to the front end 
    if (!err) {
      res.json(status);
    } else {
      res.json(err);
    }
  });  
});

/* GET contacts . */
//http://localhost:3000/api/contacts
router.get('/', function(req, res, next) {
  //res.send(contacts);
  contactService.getContacts(function(err, contacts){
    if (!err) {
      res.json(contacts);
    } else {
      res.json(err);
    }
  });
});

/* GET contacts/contactId . */
//http://localhost:3000/api/contacts/2
router.get('/:contactId', function(req, res, next) {
  contactService.getContactById(req.params.contactId, function(err, contactObj){
    if (!err) {
      res.json(contactObj);
    } else {
      res.json(err);
    }
  })
});

/* PUT Request -- To update Contact */
router.put('/:contactId', function(req, res, next){
  contactService.updateContactById(req.params.contactId, req.body, function(err, status){
    if (!err) {
      res.json(status);
    } else {
      res.json(err);
    }
  })
});

/* DELETE Request -- To delete contact */
router.delete('/:contactId', function(req, res, next){
  contactService.deleteContactById(req.params.contactId, function(err, status){
    //res.send(status);
    if (!err) {
      res.json(status);
    } else {
      res.json(err);
    }
  })
});

module.exports = router;
