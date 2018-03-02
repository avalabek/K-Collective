// var db = require ("db");
var Sequelize = require ("sequelize");
//is this necessary below
//  var env = require ('./env');
var sequelize = new Sequelize("sequelize_kitchen", "root", "root",{
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  }
}
  // env.DATABASE_NAME,
  // env.DATABASE_USERNAME,
  // env.DATABASE_PASSWORD,
  // {
  //   host: env.DATABASE_HOST,
  //   port: env.DATABASE_PORT,
  //   dialect: env.DATABASE_DIALECT,
  //   define: {
  //     underscored: true
  //   }
  // }
);
module.exports = sequelize;
  //  var db = {};

  // db.Sequelize = Sequelize;
//  db.sequelize = sequelize;

// // models==list all??
// db.hosts = require ("../models/hosts.js")(sequelize,Sequelize);
// db.guests = require("../models/guests.js")(sequelize, Sequelize);
// db.events = require("../models/events.js")(sequelize, Sequelize);

// //relationships
// db.guests.belongsTo(db.hosts);
// db.hosts.hasMany(db.guests);
// db.hosts.belongsTo(db.events);

// module.exports = db;