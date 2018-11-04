var express = require('express');

var weboldalRoutes = require('./routes/weboldal');
var teszterRoutes = require('./routes/teszter');

var mongo = require('mongodb');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use('/', weboldalRoutes);
app.use('/', teszterRoutes);


app.listen(8080); 