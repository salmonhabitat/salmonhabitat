module.exports = {

  index: function(req, res){
    res.render('about', { title: 'About' });
  },
  
  steve: function(req, res){
    res.render('employees/steve');
  },

  jacques: function(req, res){
    res.render('employees/jacques');
  },

  interns: function(req, res){
    res.render('employees/interns');
  },

};
