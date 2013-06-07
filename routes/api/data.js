module.exports = function(app) {

  app.get('/api/projects/:type', function(req, res) { res.redirect(base + req.params.type) });
  app.get('/api/projects/:type/download', function(req, res) { res.redirect(base + req.params.type + '&format=SHP') });
  

}


var base = 'http://jacques.cartodb.com/api/v2/sql?q=SELECT%20*%20FROM%20';
