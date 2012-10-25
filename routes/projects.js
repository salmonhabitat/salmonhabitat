exports.index = function(req, res){
  res.render('projects', {
    title: 'Our Projects' 
  });
};

exports.lwd = function(req, res){
  res.render('projects/lwd', { 
    title: 'Large Woody Debris',
    map: 'http://a.tiles.mapbox.com/v3/jacques.map-tb2ylctt.html#9/44.948/-68.332',
  });
};

exports.culverts = function(req, res){
  res.render('projects/culverts', { 
    title: 'Open-arch Culverts, Bridges, & Decommissions',
    map: 'http://a.tiles.mapbox.com/v3/jacques.map-gmppfmwk.html#10/44.919/-67.911'
  });
};

exports.sdss = function(req, res){
  res.render('projects/sdss', { 
    title: 'ATS Spatial Decision Support System' 
  });
};

exports.temperature = function(req, res){
  res.render('projects/temperature', { 
    title: 'Temperature' ,
    map: 'TEMPURL'
  });
};
