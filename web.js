var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  var fs = require('fs');
  var fileName = fs.readFileSync("index.html", "utf8");
  var indextext = fileName.toString();
  response.send(indextext);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
