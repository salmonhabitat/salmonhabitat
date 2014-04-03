module.exports = function(app) {

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

}

var events = require('../../credentials').m.collection('events');
