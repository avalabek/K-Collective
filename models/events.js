
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
    
  },{
    timestamps: false
  }
);
  return Events;
};