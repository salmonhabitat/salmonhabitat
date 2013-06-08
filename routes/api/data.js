module.exports = function(app) {

  // GET data, JSON representation
  app.get('/api/data/:type', function(req, res) {

    var client = new carto({
      user:     credentials.cartoUser,
      api_key:  credentials.cartoKey
    });

    var output = function(err, data) {
      res.send(data.rows);
    };

    client.on('connect', function() {
      client.query('select * from ' + req.params.type, output);
    });

    client.connect();

  });


  // Download data as a shapefile
  app.get('/api/data/:type/download', function(req, res) { res.redirect(base + req.params.type + '&format=SHP') });

}

var carto       = require('cartodb'),
    credentials = require('../../credentials'),
    base        = 'http://jacques.cartodb.com/api/v2/sql?q=SELECT%20*%20FROM%20';
