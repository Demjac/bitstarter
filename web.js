
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var fs = require('fs');
var readerf = fs.readFileSync('index.html');
var buf = new Buffer(data);
var data = buf.toString('utf8', readerf);
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
