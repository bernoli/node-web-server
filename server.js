var express = require('express');
var app = express(); // cerating express app

app.get('/', function(req, res)
{
	res.send('hello express');
});

app.listen(3000);