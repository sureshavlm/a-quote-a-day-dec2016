var express = require('express'); //importing third party module
var app = express();// MVC - Model, V - View, C - Controller

//Routing - GET, POST http://localhost:8080
app.get("/", function(req, res) {
	res.sendFile(__dirname+"/index.html");
});

//REST API - http://localhost:8080/queryProducts
app.get("/queryProducts", function(req, res) {
	res.json([{name: 'iPhone 7', price: 60000 }]);
});

app.post("/login", function(req, res) {
	res.end("Login successful.");
});

app.listen(8080, function() {
	console.log("Server listening on port 8080");
});





