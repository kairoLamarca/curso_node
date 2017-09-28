var dbConnection = require('../../config/dbConnection');//recuperando a função

module.exports = function(app){

	var connection = dbConnection();//executando a função

	app.get('/noticias', function(req, res){

		//connection.query(<sql>, <func callback>)
		connection.query('select * from noticias', function(error, result){
			//res.send(result);
			//passa o retorno como um json
			res.render("noticias/noticias", {noticias: result});
		});
	
		//res.render("noticias/noticias");
	});
};