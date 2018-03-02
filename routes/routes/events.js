module.exports = function(app, db) {
  //GET all events
  app.get("/events", function(req, res) {
    db.guests.findAll().then(function(events) {
      res.json(events);
    });
  });

  //GET event by date
  app.get("/events", function(req, res) {
    var date = req.params.id;
    db.events
      .find({
        where: { date: date }
      })
      .then(function(event) {
        res.json(event);
      });
  });

  //POST events
  app.post("/events", function(req, res) {
    var host = req.body.charity;
    var cuisine = req.body.name;
    var date = req.body.event;
    var time = req.body.time;
    var number = req.body.number;
    var charity = req.body.charity;
    

    db.events
      .create({
        //verify that these are in db
        host: host,
        cuisine: cuisine,
        date: date,
        time: time,
        number: number,
        charity: charity
      })
      .then(function(newEvent) {
        res.json(newEvent);
      });
  });
}; //end module.exports
