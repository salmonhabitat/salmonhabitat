module.exports = function(app) {

  app.get('/api', function(req, res) { res.render('api') });

  require('./api/data')(app);
  require('./api/events')(app);

}
