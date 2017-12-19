var http = require('http');

function getHomePage(){
  return `
    <html>
      <head><title>Trying NodeJS Http</title></head>
      <body>
        <h1>Home Page</h1>
      </body>
    </html>`;
}

function getAboutPage(){
  return `
    <html>
      <head><title>Trying NodeJS Http</title></head>
      <body>
        <h1>About Page</h1>
      </body>
    </html>`;
}

http.createServer(function(req, res){
  var _template;
  
  switch(req.method){
    case 'GET':
      console.log(req.url);
      if(req.url == '/'){
        _template = getHomePage();
      }else{
        _template = getAboutPage();
      }
      break;
    case 'POST':
      console.log(req.url);
      break;
    default:
      console.log("Able to serve only GET and POST methods right now");
  }

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(_template);
  res.end();
}).listen(3002, function(){
  console.log("Server started on port 3002. Goto this url in browser: http://localhost:3002");
});
