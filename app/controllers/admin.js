module.exports.formulario_inclusao_noticia = function (application, req, res) {
    res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = function (application, req, res) {
    //Quando enviamos informação via post, o express popula a proprieda body do request --body parser
    var noticia = req.body;

    //express-validator
    //ID do html(json), mensagem 
    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);//tamanho entre 10 e 100
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    //req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('data_noticia', 'Data é obrigatório').notEmpty();
    //req.assert('data_noticia', 'Data é obrigatório').isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia', 'Notícia é obrigatório').notEmpty();

    let erros = req.validationErrors();

    console.log(erros);

    if (erros) {
        res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia });
        return;
    }

    var connection = application.config.dbConnection();//dbConnection vem no app por causa do consign
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    //connection.query(<sql>, <func callback>)
    noticiasModel.salvarNoticia(noticia, function (error, result) {
        //passa o retorno como um json
        res.redirect('/noticias');//redirect para que não ocorra de reenviar o form com o F5 pois foi em post
    });
}