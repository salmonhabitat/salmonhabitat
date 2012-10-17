exports.index = function(req, res){
  res.render('index', { title: 'Project SHARE' });
};

exports.events = function(req, res){
  res.render('events', { title: 'Events' });
};

exports.resources = function(req, res){
  res.render('resources', { title: 'Resources' });
};

exports.sdss = function(req, res){
  res.render('sdss', { title: 'SDSS' });
};

exports.blog = function(req, res){
  res.render('blog', { title: 'Blog' });
};

exports.archive = function(req, res){
  res.render('archive', {title: 'Archive'});
};
