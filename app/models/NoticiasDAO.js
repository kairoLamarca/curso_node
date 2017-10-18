function NoticiasDAO(connection) {
	this._connection = connection
}

NoticiasDAO.prototype.getNoticias = function (callback) {
	this._connection.query('select * from noticias', callback);
};

NoticiasDAO.prototype.getNoticia = function (callback) {
	this._connection.query('select * from noticias where id_noticia = 2', callback);
};

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
	//o json noticia ja esta vindo com as variaveis com o mesmo nome das colunas no BD, o ID na view ja foi feito desse jeito
	//dessa maneira, a inclusão já fica automatica
	this._connection.query('insert into noticias set ?', noticia, callback);
};

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
};

module.exports = function () {
	return NoticiasDAO;
};