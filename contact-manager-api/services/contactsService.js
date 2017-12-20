// 2. Establish handshake with DB (from services)
var Contact = require("../models/contact");

//creating contact
exports.addContact = function (contactDataToBeSaved, callback ) {
  console.log(contactDataToBeSaved);
  
  // 3. Construct our own query to Create Contact
  var contactDao = new Contact(contactDataToBeSaved);
  contactDao.save(function (err, savedContact) {
    // 4. Get status from Database
      if (!err) {
          console.log(`Contact registered successfully with contactId:${savedContact.contactId}`);
      }
      //  5. Channelise it to the router
      callback(err, savedContact);
  });
};

//getall contacts
exports.getContacts = function(callback){

  Contact.find({}, function(err, contacts){
    if(!err){
      console.log("Fetched all contacts", contacts)
    }
    callback(err, contacts);
  });
}

//get Contact By id
exports.getContactById = function(_contactId, callback){
  Contact.findOne({contactId: parseInt(_contactId)}, function(err, contactObj){
    if(!err){
      console.log(`Fetched contact by ID ${contactObj.contactId}`);
    }
    callback(err, contactObj);
  });
}

exports.updateContactById = function(_contactId, contactToBeUpdated, callback){
  Contact.update({ contactId: parseInt(_contactId) }, contactToBeUpdated, function (err, updatedContactObj) {
    if (!err) {
        console.log(`Contact updated successfully`);
    }
    callback(err, updatedContactObj);
  });
}

exports.deleteContactById = function(_contactId, callback){
  Contact.remove({contactId: parseInt(_contactId) }, function(err, status){
    if (!err) {
      console.log(`Contact Deleted successfully`);
    }
    callback(err, status);
  });
}


