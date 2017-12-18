var events = require('events'); // Import events module

var eventEmitter = new events.EventEmitter(); // Create an eventEmitter object

// Bind the connection event with the callback
eventEmitter.on('open_connection', function () {
  console.log('CONNECTION OPENED succesfully.');
  // eventEmitter.emit will fire the event. i.e data_received
  eventEmitter.emit('data_received');
});

// Bind the data_received event with the callback
eventEmitter.on('data_received', function(){
   console.log('DATE RECEIVED succesfully.');
});

// Fire the connection event 
eventEmitter.emit('open_connection');

console.log("Program Ended.");