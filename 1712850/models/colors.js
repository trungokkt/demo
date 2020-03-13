'use strict';
module.exports = (sequelize, DataTypes) => {
  const Colors = sequelize.define('Colors', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    imagepath: DataTypes.TEXT
  }, {});
  Colors.associate = function(models) {
    // associations can be defined here
    Colors.hasMany(models.PrductColor,{foreignKey:'ColorId'});
  };
  return Colors;
};