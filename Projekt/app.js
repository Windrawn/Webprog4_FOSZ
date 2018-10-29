var express = require('express');

var weboldalRoutes = require('./routes/weboldal');

var app = express();

app.set('view engine', 'ejs');

app.use('/', weboldalRoutes);


app.listen(8080); 