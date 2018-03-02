module.exports = function (app, db){

  app.get("/", function(req,res){
    db.Hosts.findAll()
    .then(function(data){
      var hosts = {
        hosts: data
      };
      console.log(hosts);
      res.render("index", hosts);
    });
  });

  app.get ("/api/hosts", function (req,res){
    db.Hosts.findAll()
    .then(function(hosts){
      res.json(hosts);
      //console.log("Are you seeing double?", hosts);
    });
  });

  app.post("/api/hosts", function(req, res) {
    db.Hosts.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      cuisine: req.body.cuisine,
      image: req.body.image,
      charity:req.body.charity,
      email: req.body.email,
      address: req.body.address,
      date: req.body.date,
      peoplecount: req.body.peoplecount

    }).then(function(result) {
      res.json(result);
      console.log("Your host: ", req.body.firstname);
    })
  });
  
  
}