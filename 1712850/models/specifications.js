'use strict';
module.exports = (sequelize, DataTypes) => {
  const Specifications = sequelize.define('Specifications', {
    name: DataTypes.STRING,
    summary: DataTypes.TEXT
  }, {});
  Specifications.associate = function(models) {
    // associations can be defined here
    Specifications.hasMany(models.ProductSpecifications,{foreignKey:'SpecificationsID'});

  };
  return Specifications;
};