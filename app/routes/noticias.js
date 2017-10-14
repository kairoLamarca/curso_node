//var dbConnection = require('../../config/dbConnection');//recuperando a função

module.exports = function(application){

	//var connection = dbConnection();//executando a função	

	application.get('/noticias', function(req, res){

		var connection = application.config.dbConnection();//dbConnection vem no app por causa do consign
		var noticiasModel = new application.app.models.NoticiasDAO(connection);

		//connection.query(<sql>, <func callback>)
		noticiasModel.getNoticias(function(error, result){
			//passa o retorno como um json
			res.render("noticias/noticias", {noticias: result});
		});
		
	
		//res.render("noticias/noticias");
	});
};
