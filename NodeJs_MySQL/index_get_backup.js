//index.js

var express	= require('express')
var app		= express()

//req : Object data from client
//res : Object for passing result to client
app.get('/', function(req, res){
	res.send("Hello, World!")
})

// localhost:port/modulename?dataName=value
app.get('/pass', function(req, res){
	var data = req.query.data
	res.send(data)
})

app.listen(3000, function() {
	console.log("Server stating with 3000")
})


