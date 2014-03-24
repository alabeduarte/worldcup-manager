var express = require("express");
var app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' == req.method) res.send(200);
    else next();
});

app.use(express.static(__dirname + '/www'));

app.listen(8000, function () {
  console.log('Listening on port %d', this.address().port);
});