
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var fs = require('fs');
var buffer = new Buffer(256, 'utc-8');
  response.send(buffer.toString(fs.readFileSync("index.html, 'utc-8')));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
