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
    var id = req.param('id');
    Competition.findOne({id: id}, function (err, competition) {
       if (err) return res.send(err,500);
       res.render('main/competition',{ competition: competition });
    });
  },

  _config: {}

};
