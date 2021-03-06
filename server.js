var express = require('express');
var middleware = require('./middleware').middleware;
var app = express(); // cerating express app
var PORT = process.env.PORT || 3000;

// middlewares are like filters in asp.net? you add them at a chain in a pipeline previous to the page request
// this way we can add cross cutting behaviors to routes level or at global for exmaple we can log any request. 


// app level middleware, gets called for any page request
app.use(middleware.logger);

// route level middleware.
app.get('/about',middleware.requireAuthentication,  function(req, res){
	res.send('about us');
});

app.use(express.static(__dirname+"/public"));

app.listen(PORT, function(){
	console.log("express server is listen on port: " + PORT);
});