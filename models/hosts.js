// var Sequelize = require("sequelize");
// var sequelize = require("../config/db.js");
// var DataTypes = require("sequelize/lib/data-types");
module.exports = function(sequelize, DataTypes) {
  var Hosts = sequelize.define(
    "Hosts",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      firstname: {
        type: DataTypes.STRING
      },

      lastname: {
        type: DataTypes.STRING
      },
      cuisine: {
        type: DataTypes.STRING
        
      },
      image: {
        type: DataTypes.STRING
        
      },
      charity: {
        type: DataTypes.STRING
        
      },
      email: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING
      },
      date: {
        type: DataTypes.STRING
      },
      peoplecount: {
        type: DataTypes.INTEGER
      }
      //TODO check date/time datatypes
    },
    {
      timestamps: false
    }
  );
  return Hosts;
};
