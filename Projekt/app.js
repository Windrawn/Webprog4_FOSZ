var express = require('express');

var weboldalRoutes = require('./routes/weboldal');
var teszterRoutes = require('./routes/teszter');
var userRoutes = require('./routes/user');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use('/', weboldalRoutes);
app.use('/', teszterRoutes);
app.use('/', userRoutes);


app.listen(8080); 