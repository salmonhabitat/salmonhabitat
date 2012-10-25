exports.all = function(req, res){
  res.render('papers', { title: 'Literature' });
};

exports.view = function(req, res){
  res.render('paper_view', { title: 'Paper' });
};

exports.post = function(req, res){
  res.render('paper_new', { title: 'Paper' });
};
