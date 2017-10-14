module.exports = function(application){

	application.get('/noticia', function(req, res){

		var connection = application.config.dbConnection();//dbConnection vem no app por causa do consign
		var noticiasModel = new application.app.models.NoticiasDAO(connection);

		//connection.query(<sql>, <func callback>)
		noticiasModel.getNoticia(function(error, result){
			//passa o retorno como um json
			res.render("noticias/noticia", {noticia: result});
		});
	});
};