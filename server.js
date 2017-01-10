var express = require('express');
var app = express(); // cerating express app
var PORT = 3000;
app.get('/about', function(req, res){
	res.send('about us');
});

app.use(express.static(__dirname+"/public"));

app.listen(port, function(){
	console.log("express server is listen on port: " + PORT);
});