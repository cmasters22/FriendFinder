var express = require("express");

var bodyParser = require("body-parser");

var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.static(require('./app/routing/apiRoutes')));
app.use(require('./app/routing/htmlRoutes'));

app.listen(3000, function(){
	console.log("Working");
});