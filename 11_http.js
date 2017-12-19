var http = require('http');

http.createServer(function(req, res){
  console.log("Server created"); //printed twice as one more req received to load favicon from chrome family browsers
  //firefox sends req to load favicon for the first time only. but chrome in each loading.
  
  //algo:
  //1. understand the url --> req.url
  //2. understanding the http method 
  //3. construct the right template and send
  console.log(req.url);
  switch(req.url){
    case '/':
      res.writeHead(200, {"Content-Type": "text/html"});  
      res.write(`<p>Home</p>`);  
    case '/about':
      res.writeHead(200, {"Content-Type": "text/html"});  
      res.write(`<p>About</p>`);  
  }
  res.end();
}).listen(3005);