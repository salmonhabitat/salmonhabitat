var express = require('express')
  , poet = require('poet')
  , stylus = require('stylus');

var app = express.createServer();

poet(app)
  .createPostRoute()
  .createPageRoute()
  .createTagRoute()
  .createCategoryRoute()
  .init();

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(require('nib')());
 }

app.configure(function(){
  app.set('port', process.env.PORT || 3344 );
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(stylus.middleware({
    src:__dirname + '/public',
    compile: compile
  }));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// Routes 

var main = require('./routes/main');
var about = require('./routes/about');

app.get('/', main.index);

app.get('/blog', main.blog);
app.get('/archive', main.archive);

app.get('/resources', main.resources);
app.get('/resources/sdss', main.sdss);

app.get('/about', about.index);
app.get('/about/steve', about.steve);
app.get('/about/jacques', about.jacques);
app.get('/about/interns', about.interns);

require('http').createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
