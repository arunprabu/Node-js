exports.addContact = function (contactDataToBeSaved, callback ) {
  console.log(contactDataToBeSaved);
  // 2. Establish handshake with DB (from services)

  
  
  var _status = {
    statusCode:200,
    statusMsg: "Success",
    createdContact: contactDataToBeSaved
  }

  console.log("testing");
  callback({}, _status );
  
  // 3. Construct our own query to Create Contact
  // 4. Get status from Database
//  5. Channelise it to the router
};
