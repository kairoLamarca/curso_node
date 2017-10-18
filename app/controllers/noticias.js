module.exports.noticias = function(application, req, res){
    var connection = application.config.dbConnection();//dbConnection vem no app por causa do consign
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    //connection.query(<sql>, <func callback>)
    noticiasModel.getNoticias(function (error, result) {
        //passa o retorno como um json
        res.render("noticias/noticias", { noticias: result });
    });
}

module.exports.noticia = function(application, req, res){
    var connection = application.config.dbConnection();//dbConnection vem no app por causa do consign
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    //connection.query(<sql>, <func callback>)
    noticiasModel.getNoticia(function (error, result) {
        //passa o retorno como um json
        res.render("noticias/noticia", { noticia: result });
    });
}