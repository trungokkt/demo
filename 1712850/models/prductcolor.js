'use strict';
module.exports = (sequelize, DataTypes) => {
  const PrductColor = sequelize.define('PrductColor', {
    imagepath: DataTypes.TEXT
  }, {});
  PrductColor.associate = function(models) {
    // associations can be defined here
    PrductColor.belongsTo(models.Products,{foreignKey:'ProductId'});
    PrductColor.belongsTo(models.Colors,{foreignKey:'ColorId'});

  };
  return PrductColor;
};