
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
      }
      
      
      
    },
    {
      timestamps: false
    }
  );
  return Guests;
};
