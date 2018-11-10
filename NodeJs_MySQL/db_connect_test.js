var mysql		= require('mysql')
var connection	= mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: 'xowkd5481@',
	database: 'Study'
})

connection.connect(function(err){
	if(!err)
		console.log("Connect!")
	else
		console.log("Connect Error...")
})




connection.query('select * from user', function(err, rows, fields){
	if(!err)
		console.log('The solution is: ', rows);
	else
		console.log('Error while performing Query.', err);
})

connection.end();
