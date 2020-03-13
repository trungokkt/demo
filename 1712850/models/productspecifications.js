'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductSpecifications = sequelize.define('ProductSpecifications', {
    description: DataTypes.TEXT
  }, {});
  ProductSpecifications.associate = function(models) {
    // associations can be defined here
    ProductSpecifications.belongsTo(models.Products,{foreignKey:'ProductId'});
    ProductSpecifications.belongsTo(models.Specifications,{foreignKey:'SpecificationId'});
  };
  return ProductSpecifications;
};