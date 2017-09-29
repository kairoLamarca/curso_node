var app = require('./config/server');

//var rotaNoticias = require('./app/routes/noticias')(app);
//rotaNoticias(app);

//var rotaHome = require('./app/routes/home')(app);
//rotaHome(app);

//var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);
//rotaFormInclusaoNoticia(app);

//app.get('/tecnologia', function(req, res){
	//res.send("<html><body>Notícias de Tecnologia</body></html>")
//});

app.listen(3000, function(){
	//console.log("Servidor rodando com Express");
	console.log('Servidor ON');
});