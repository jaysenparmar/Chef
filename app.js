//dependencies for each module used
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var app = express();

//route files to load
var index = require('./routes/index');
var latest = require('./routes/latest');
var reviews = require('./routes/reviews');
var community = require('./routes/community');
var bdubs = require('./routes/bdubs');
var bakedbear = require('./routes/bakedbear');
var oscars = require('./routes/oscars');

//database setup - uncomment to set up your database
//var mongoose = require('mongoose');
//mongoose.connect(process.env.MONGOHQ_URL || 'mongodb://localhost/DATABASE1);

//Configures the Template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());

//routes
app.get('/', index.view);
app.get('/latest', latest.view);
app.get('/reviews', reviews.view);
app.get('/community', community.view);
app.get('/bdubs', bdubs.view);
app.get('/bakedbear', bakedbear.view);
app.get('/oscars', oscars.view);


//set environment ports and start application
app.set('port', process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});