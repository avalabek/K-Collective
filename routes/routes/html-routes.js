var path = require("path");



module.exports = function(app){
  //index route loads index.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //about route loads about.html page
  app.get("/about", function(req,res){
    res.sendFile(path.join(__dirname, "../../public/about.html"));
  });
  //host route loads about.html page
  app.get("/host", function(req,res){
    res.sendFile(path.join(__dirname, "../../public/host.html"));
  });
  // //host route loads donate.html page do we have this?
  // app.get("/donate", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../../public/donate.html"));
  // });
};//end module.exports