module.exports = function(application){
	application.get('/formulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia");
	});

	application.post('/noticias/salvar', function(req, res){
		//Quando enviamos informação via post, o express popula a proprieda body do request --body parser
		var noticia = req.body;

		var connection = application.config.dbConnection();//dbConnection vem no app por causa do consign
		var noticiasModel = application.app.models.noticiasModel;

		//connection.query(<sql>, <func callback>)
		noticiasModel.salvarNoticia(noticia, connection, function(error, result){
			//passa o retorno como um json
			//res.render("noticias/noticias", {noticias: result});
			res.redirect('/noticias');//redirect para que não ocorra de reenviar o form com o F5 pois foi em post
		});
	});
}