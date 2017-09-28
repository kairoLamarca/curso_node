module.exports = function(app){

	app.get('/noticias', function(req, res){
		
		var mysql = require('mysql');

		//os valores são passados em uma estrutura json
		var connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '1234',
			database: 'portal_noticias'
		});

		//connection.query(<sql>, <func callback>)
		connection.query('select * from noticias', function(error, result){
			res.send(result);
		});
	
		//res.render("noticias/noticias");
	});
};