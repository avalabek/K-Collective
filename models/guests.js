// var Sequelize = require("sequelize");
// var sequelize = require("../config/db.js");
// var DataTypes = require("sequelize/lib/data-types");
module.exports = function(sequelize, DataTypes) {
  var Guests = sequelize.define(
    "Guests",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      phone: {
        type: DataTypes.STRING
      },
      event: {
        type: DataTypes.STRING
      }
      
      
      //TODO check date/time datatypes
    },
    {
      timestamps: false
    }
  );
  return Guests;
};
