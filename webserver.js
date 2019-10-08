
var http = require('http');
var fs = require('fs');
var dato = require('./dato.js');

var obj = {};


readcounter = () => { 

  let rawdata = fs.readFileSync('./counter.json');
  obj = JSON.parse(rawdata);

  if(JSON.stringify(obj) === {} ){
    obj.count = 0;
  } 

  console.log("read: " + obj.count);

}

writecounter = () => {
obj.count += 1;

console.log("write: " + obj.count);

let data = JSON.stringify(obj);
fs.writeFileSync('./counter.json', data);


}

http.createServer(function (req, res) {

  if (req.url != '/favicon.ico') {
    readcounter();
    writecounter();

    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log("server: " + obj.count);
    res.write("You are visitor number " + obj.count +
    "<br>Datoen i dag er: " + dato.myDateTime());
    res.end();
  }

}).listen(8080);