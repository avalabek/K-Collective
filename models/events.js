// var Sequelize = require("sequelize");
// var sequelize = require("../config/db.js")
// var DataTypes = require("sequelize/lib/data-types");

module.exports = function(sequelize, DataTypes){
  var Events = sequelize.define("Events", {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    event: {
      type: DataTypes.STRING
    },
         
    cuisine:{
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.INTEGER
    },
    time: {
      type: DataTypes.INTEGER
    },
    number: {
      type: DataTypes.INTEGER
    },
    charity: {
      type: DataTypes.STRING
    }
    //TODO check date/time datatypes
  },{
    timestamps: false
  }
);
  return Events;
};