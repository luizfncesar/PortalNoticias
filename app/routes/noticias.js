module.exports = function (application) {

	application.get('/noticias', function(req, res){
		aplication.app.controllers.noticias.noticias(aplication, req, res);
	});

	application.get('/noticia', function(req, res){
		aplication.app.controllers.noticias.noticia(aplication, req, res);	
	});
};