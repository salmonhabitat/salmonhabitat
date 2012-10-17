var express = require('express');
var http = require('http');
var poet = require('poet');

var app = express.createServer();

poet(app)
  .createPostRoute()
  .createPageRoute()
  .createTagRoute()
  .createCategoryRoute()
  .init();

app.configure(function(){
  app.set('port', process.env.PORT || 3344 );
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

var main = require('./routes/main');
var about = require('./routes/about');
var projects = require('./routes/projects');
var papers = require('./routes/papers');

app.get('/', main.index);

app.get('/about', about.index);
app.get('/about/steve', about.steve);
app.get('/about/jacques', about.jacques);
app.get('/about/interns', about.interns);

app.get('/projects', projects.index);
app.get('/projects/culverts', projects.culverts);
app.get('/projects/lwd', projects.lwd);
app.get('/projects/sdss', projects.sdss);
app.get('/projects/temperature', projects.temperature);

app.get('/blog', main.blog);
app.get('/archive', main.archive);

app.get('/events', main.events);

app.get('/resources', main.resources);
app.get('/resources/sdss', main.sdss);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
