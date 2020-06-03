var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controller')
    .into(app)
    
module.exports = app;