var mysql = require('mysql');

var connMySQL =  function() {
	console.log("Conexão com o banco de dados foi estabelecida!");
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'root',
		database : 'portal_noticias'
	});
}


module.exports = function() {
	console.log("O autoload carregou a conexão com o banco de dados")
	return connMySQL;
}