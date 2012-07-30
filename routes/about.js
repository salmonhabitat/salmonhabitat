exports.index = function(req, res){
  res.render('about', { title: 'About' });
};

exports.member = function(req, res){
  res.render('person', { title: 'About' });
};

exports.events = function(req, res){
  res.render('events', { title: 'Events' });
};

exports.projects = function(req, res){
  res.render('projects', { title: 'Projects' });
};

exports.contact = function(req, res){
  res.render('contact', { title: 'Contact' });
};
