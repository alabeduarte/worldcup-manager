var express = require("express");
var app = express();

app.use(express.static(__dirname + '/www'));
app.listen(8000, function () {
  console.log('Listening on port %d', this.address().port);
});