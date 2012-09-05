exports.index = function(req, res){
  res.render('index', { title: 'Project SHARE' });
};

exports.events = function(req, res){
  res.render('events', { title: 'Events' });
};

exports.blog = function(req, res){
  res.render('blog', { title: 'Blog' });
};

exports.archive = function(req, res){
  res.render('archive', {title: 'Archive'});
};
