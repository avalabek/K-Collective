// var db = require("../models");

module.exports = function(app, db) {
  //GET all guests
  app.get("/", function(req, res) {
    db.Guests.findAll()
    .then(function(data) {
      var guests = {
        guests: data
      };
      console.log(guests);
      res.render("index", guests);
    });
  });

  
  app.get("/api/guests", function(req,res){
    db.Guests.findAll()
    .then(function(guests){
      res.json(guests);
    });
  });

  app.post("/api/guests", function (req, res) {
    db.Guests.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      event:req.body.event
    }).then(function (result) {
      res.json(result);
      console.log("New guest: ", req.body.first_name);
    })
  });
};