var http = require('http');

http.createServer(function(req, res){
  console.log("Server created"); //printed twice as one more req received to load favicon
  
  res.end("Testing");
}).listen(3002);