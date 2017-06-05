var express = require('express'),
	consign = require('consign'),
	bodyParser = require('body-parser'),
	expressValidator = require('express-validator');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({
	extended: true,
}));
app.use(expressValidator());

consign()
	.include('./app/routes')
	.then('config/dbConnection.js')
	.then('./app/models')
	.into(app);


module.exports = app;