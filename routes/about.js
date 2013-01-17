exports.index = function(req, res){
  res.render('about', {title: 'About' });
};

exports.steve = function(req, res){
  res.render('about/employees/steve', { title: 'Steve Koenig' });
};

exports.jacques = function(req, res){
  res.render('about/employees/jacques', { title: 'Jacques Tardie' });
};

exports.interns = function(req, res){
  res.render('about/employees/interns', { title: 'Previously...' });
};
