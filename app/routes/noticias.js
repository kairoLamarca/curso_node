module.exports = function(app){

	var mysql = require('mysql');

	//os valores são passados em uma estrutura json
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '1234',
		database: 'portal_noticias';
	});

	app.get('/noticias', function(req, res){
		res.render("noticias/noticias");
	});
};