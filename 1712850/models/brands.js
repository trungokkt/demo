'use strict';
module.exports = (sequelize, DataTypes) => {
  const Brands = sequelize.define('Brands', {
    name: DataTypes.STRING,
    summary: DataTypes.TEXT,
    imagepath: DataTypes.TEXT
  }, {});
  Brands.associate = function(models) {
    // associations can be defined here
    Brands.hasMany(models.Products,{foreignKey:'bracdId'});
  };
  return Brands;
};