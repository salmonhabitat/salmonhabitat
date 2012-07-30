exports.index = function(req, res){
  res.render('projects', { title: 'Our Projects' });
};

exports.lwd = function(req, res){
  res.render('project', { 
    title: 'Large Woody Debris',
    map: 'http://a.tiles.mapbox.com/v3/jacques.map-tb2ylctt.html#9/44.948/-68.332'
  });
};

exports.culverts = function(req, res){
  res.render('project', { 
    title: 'Open-arch Culverts' 
  });
};

exports.sdss = function(req, res){
  res.render('project', { 
    title: 'ATS Spatial Decision Support System' 
  });
};

exports.temperature = function(req, res){
  res.render('project', { 
    title: 'Temperature' 
  });
};
