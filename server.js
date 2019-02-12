var express = require("express"),
  session = require("express-session"),
  bodyParser = require("body-parser");

var app = express(),
  PORT = process.env.PORT || 8080;

// Static directory
app.use(express.static("./app/public"));

//For BodyParser
app.use(bodyParser({ defer: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Models
var db = require("./app/models");

// Routing

var appointment = require("./app/controllers/authcontroller");
app.use("/", appointment);

var server;

//Sync Database
db.sequelize
  .sync({})
  .then(function() {
    console.log("Database is up and running.");

    server = app.listen(PORT, function(err) {
      if (!err) console.log("Website is up and running.");
      else console.log(err);
    });
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });

module.exports = server;
