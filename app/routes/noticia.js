module.exports = function(app){

	app.get('/noticia', function(req, res){

		var connection = app.config.dbConnection();//dbConnection vem no app por causa do consign

		//connection.query(<sql>, <func callback>)
		connection.query('select * from noticias where id_noticia = 2', function(error, result){
			//passa o retorno como um json
			res.render("noticias/noticia", {noticia: result});
		});
	});
};