var fs = require("fs");

var txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';

//Going to write a new file -- async
fs.writeFile('dummy.txt', txt,  function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   fs.readFile('dumm1y.txt', function (err, data) {
      if (err) {
         console.log(err);
         return;
      }
      console.log("Asynchronous read: " + data.toString());
   });
});

console.log("test");