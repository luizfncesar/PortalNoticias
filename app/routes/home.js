module.exports = function (application) {
	app.get('/', function(req, res){
		aplication.app.controllers.home.index(aplication, req, res);
	});
};
