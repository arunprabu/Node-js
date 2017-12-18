//this example uses default path package and gets filename and extension
var path =require('path');

var fileName = __filename; //global object
console.log(fileName); //prints the whole file name with directory

var extn = path.extname(fileName);
console.log(extn); //prints only the file extension

var baseName = path.basename(fileName);
console.log(baseName); //prints only the filename
