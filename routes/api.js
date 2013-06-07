module.exports = function(app) {

  app.get('/api', function(req, res) { res.render('api') });

  // GET all events
  app.get('/api/events', function(req, res) {
    events.find().toArray(function(err, result) { 
      res.send(result); 
    }) 
  });

  // GET single event
  app.get('/api/events/:name', function(req, res) {
    events.find({ title: req.params.name }).toArray(function(err, result) {
      if (err) throw err;
      res.json(result);
    })
  });

  // POST single event
  // DELETE single event

  // GET all projects

  var base        = 'http://jacques.cartodb.com/api/v2/sql?q=SELECT%20*%20FROM%20';

  app.get('/api/projects/:type', function(req, res) { res.redirect(base + req.params.type) });
  app.get('/api/projects/:type/download', function(req, res) { res.redirect(base + req.params.type + '&format=SHP') });
  

}

var events = require('../credentials').m.collection('events');
