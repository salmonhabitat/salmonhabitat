var express = require('express'),
    app     = express(),
    stylus  = require('stylus'),
    Poet    = require('poet');

var poet = Poet(app, {
  posts: './_posts/',
  metaFormat: 'json'
});

poet.init().then(function() {});

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
  app.use(express.compress());
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

require('./routes')(app);

require('http').createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
