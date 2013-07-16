
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var readerf = fs.readFileSync('index.html');
var data = buf.toString('utf8', readerf);
var fs = require('fs');
var bfr = new buffer(data);
  response.send(bfr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
