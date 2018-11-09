//index.js

var express = require('express');
var app = express();


//Setting on express's view engine for using ejs
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

//Provided name by qurey
//All query stored in req.query
app.get("/hello", function(req, res){
	res.render("hello", {name:req.query.nameQuery});
});

//Provided name by route parameter
//if /hello/kim -> name:req.params,nameParam = kim
//res.render : function for using ejs
//	       first param : ejs name / second param : pass objet used ejs
//red.render must find ejs file in '/views', so folder's name '/views' must be maintained.
app.get("/hello/:nameParam", function(req,res){
	res.render("hello", {name:req.params.nameParam});
});


app.listen(3000, function(){
	console.log('Server On!');
});


