module.exports.formulario_inclusa_notica = function(application, req, res){
	res.render("admin/form_add_noticia", {
		validacao : {},
		noticia : {},
	});
}

module.exports.noticias_salvar = function(application, req, res){
	var noticia = req.body;
		// res.send(noticias);

		//console.log(noticia);

		req.assert('titulo','Título é obrigatório').notEmpty();
		req.assert('resumo','Resumo é obrigatório').notEmpty();
		req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(5, 100);
		req.assert('autor','Autor é obrigatório').notEmpty();
		req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({
			format: 'YYYY-MM-DD'
		});
		req.assert('noticia','Notícia é obrigatório').notEmpty();

		var erros = req.validationErrors();
		console.log(erros);

		if(erros) {
			res.render("admin/form_add_noticia", {
				validacao : erros,
				noticia : noticia,
			});
			return;
		}


		//conexão
		var connection = application.config.dbConnection();
		//model
		var noticiaModel = new application.app.models.NoticiasDAO(connection);

		noticiaModel.salvarNoticia(noticia, function(error, result){
			res.redirect('/noticias');
		});

		//salvarNoticia
}