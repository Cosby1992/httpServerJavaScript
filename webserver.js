
var http = require('http');
var timestamp = require('./dato.js');

//create a server object:
http.createServer(function (req, res) {

  res.write('Now = ' + timestamp.myDateTime()); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080


