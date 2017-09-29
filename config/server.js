var express = require('express');//o express retorna uma função
var consign = require('consign');

//var msg = require('./mod_teste');
var app = express();
app.set('view engine', 'ejs');//Configurar motor de geração de views para o EJS
app.set('views', './app/views');//configura onde está as views

//consign scan a routes e inclui no app
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.into(app);

module.exports = app;