var app = require("./config/server");


// old condição de rotas, modificada com o consign
// var rotaHome = require('./app/routes/home')(app);
// var rotaNoticias = require('./app/routes/noticias')(app);
// var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);


app.listen(3000, function(){
	console.log("Server ON");
});	