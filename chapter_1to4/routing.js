var express = require('express');

var app = express();


app.get('/',function(req, res){
	res.type('text/plain');
	res.send('Meadowlark Travel');
});

app.get('/about',function(req,res){
	res.type('text/plain');
	res.send('About Meadowlark Travel');
});

app.use(function(req,res){
	res.type('text/plain');
	res.status(404);
	res.send('404-not found');
});

app.listen(3000, function(){
	console.log('succees');
});