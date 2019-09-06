var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

  //Check if url is correct
  if(parsedUrl.pathname=='/listings'){
    response.end(listingData);
  }else{
    response.writeHead(404,{'Content-Type':'text/plain'});
    response.end('Bad gateway error');
  }
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  if(err){
    throw err;
  }
  listingData=data;

  //Create server
  var server=http.createServer(requestHandler);
  //Start server
  server.listen(port, function(){
    // http://localhost:8080
    // http://localhost:8080/listings
    console.log('Server listening on: http://localhost:' + port);
  });
});
