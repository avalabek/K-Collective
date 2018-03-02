
var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 3000;


var db = require("./models");




app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.use(express.static("public"));



require("./routes/routes/html-routes.js")(app);
require("./routes/routes/hosts.js")(app, db);
require("./routes/routes/events.js")(app, db);
require("./routes/routes/guests.js")(app, db);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
 });
