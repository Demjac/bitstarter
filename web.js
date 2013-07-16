
var express = require('express');

var app = express.createServer(express.logger());

var readerf = fs.readFileSync("index.html");
var data = buf.toString('utf8', readerf);
app.get('/', function(request, response) {
var fs = require('fs');
var buffer = new buffer();
  response.send("utf-8", data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
