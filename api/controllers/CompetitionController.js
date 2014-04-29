module.exports = {
  top: function (req,res) {
    var featured = {};
    Competition.findOne().where({ is_featured: true }).exec(function(err,competition){
      Competition.find().where({ is_featured: false}).limit(50).sort('createdAt').exec(function(err,competitions){
        res.render('main/index',{
          featured_name: competition.name,
          featured_description: competition.description,
          top_competitions: competitions
        });
      });
    });
  },
  new: function (req,res) {
    res.render('main/new');
  },
  index: function (req,res) {
    res.render('main/competition');
  },

  _config: {}

};
