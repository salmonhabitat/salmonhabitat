module.exports = function(app) {

  // Index
  app.get('/', function(req, res) {
    res.render('index', { 
      title: 'Home' 
    });
  });
 
  // About
  app.get('/about', function(req, res) {
    res.render('about', { title: 'About' });
  });

  app.get('/about/:employee', function(req, res) {
    res.render('about/employees/' + req.params.employee );
  });

  // Blog
  app.get('/blog', function(req, res) {
    res.render('blog', { title: 'Blog' });
  });

  app.get('/blog/archive', function(req, res) {
    res.render('archive', { title: 'Archive' });
  });

};
