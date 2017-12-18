var fs = require("fs");
var data = '';
// Create a readable stream
var readerStream = fs.createReadStream('large_data.txt', { start: 200, end: 1400});

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
  console.log(chunk);
  data += chunk;
});

readerStream.on('end',function(){
  console.log("===================Reading Ended ===========================");
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");