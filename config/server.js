var express = require('express');//o express retorna uma função
//var msg = require('./mod_teste');
var app = express();
app.set('view engine', 'ejs');//Configurar motor de geração de views para o EJS
app.set('views', './app/views');//configura onde está as views

module.exports = app;