var express = require('express')
var http = require('http');

// Route definitions
var main = require('./routes/main')
var about = require('./routes/about')
var projects = require('./routes/projects')
var papers = require('./routes/papers')

// App initialization
var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3333);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// ===== ROUTES =====

// Index page
app.get('/', main.index);

// About pages
app.get('/about', about.index);
app.get('/about/steve', about.steve);
app.get('/about/jacques', about.jacques);
app.get('/about/interns', about.interns);

// Project pages
app.get('/projects', projects.index);
app.get('/projects/culverts', projects.culverts);
app.get('/projects/lwd', projects.lwd);
app.get('/projects/sdss', projects.sdss);
app.get('/projects/temperature', projects.temperature);

http.createServer(app).listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});
