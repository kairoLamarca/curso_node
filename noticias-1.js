var http = require('http');//importar bibliotecas

var server = http.createServer(function(req, res){//Criar servidor

	var categoria = req.url;//valor após a porta da url, ou seja localhost:3000/pagina, depois da barra
	
	if (categoria == '/tecnologia'){
		res.end("<html><body>Notícias de Tecnologia</body></html>");
	}
	else if (categoria == '/moda'){
		res.end("<html><body>Notícias de Moda</body></html>");
	}
	else if (categoria == '/beleza'){
		res.end("<html><body>Notícias de Beleza</body></html>");
	}
	else{
		res.end("<html><body>Portal de notícias</body></html>");
	}

});

server.listen(3000);