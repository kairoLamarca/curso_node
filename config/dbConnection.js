var mysql = require('mysql');

module.exports = function(){
	//os valores são passados em uma estrutura json
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '1234',
		database: 'portal_noticias'
	});
}