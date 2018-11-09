//index.js

var express = require('express');
var app = express();

/*
//When get method requeted from http
app.get('/', function(req,res) {
	res.send('Hello World!');

});
*/

//Must be executed regardless of http method
//express.static : Specifing static folder
//__dirname : Show file path of executed program on node.js
app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
	console.log('Server On!');
});


