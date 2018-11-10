
var express		= require('express')
var app			= express()
var bodyParser	= require('body-parser')

//Use bodyParser
app.use(bodyParser.urlencoded({	extended: true }))

var mysql 		= require('mysql')
var connection	= mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'xowkd5481@',
	database : 'Study'
})

connection.connect()


//'/user' router
app.post('/user', function(req, res){	
	var userID = req.body.id
	var userPW = req.body.pw
	
	if(userID && userPW){
		console.log("Receive Data( id : " + userID + ", pw : " + userPW + "" )
		connection.query("INSERT INTO user(userID, userPW) VALUES ('" + userID +"', '" + userPW + "')", function(error, result, fields){
							console.log("Function")
							if(error){
								console.log("err : " + error)
								res.send("err : " + error)
							}
							else{
								console.log(userID + ', ' + userPW)
								res.send('Success create user name: ' + userID +' pw: ' + userPW)
							}
						})
		console.log("Perform Query")
	}

})

//Run server
app.listen(3000, function(){
	console.log("Server start : 3000");
})

