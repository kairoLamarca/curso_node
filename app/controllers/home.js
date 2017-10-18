module.exports.index = function (application, req, res){
    
    let connection = application.config.dbConnection();//dbConnection vem no app por causa do consign
    let noticiasModel = new application.app.models.NoticiasDAO(connection);

    //callback espera pelo menos dois parametros, error e result
    noticiasModel.get5UltimasNoticias((error, result) =>{
        console.log(result);
        res.render("home/index", {noticias: result});
    });

    
}
