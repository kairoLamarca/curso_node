var express = require('express');//o express retorna uma função
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

//var msg = require('./mod_teste');
var app = express();
app.set('view engine', 'ejs');//Configurar motor de geração de views para o EJS
app.set('views', './app/views');//configura onde está as views

//middleware
app.use(bodyParser.urlencoded({extended: true}));//permite uma tratativa mais completa, o json da url
app.use(expressValidator());

//consign scan a routes e inclui no app
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.into(app);

module.exports = app;