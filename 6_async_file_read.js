var fs = require("fs");

//async read
fs.readFile('test.txt', function (err, data) {
   if (err){
     return console.error(err);
   }
   console.log(data.toString());
});

//the following line will get executed first while fs is reading the file
console.log("Program Ended");