'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    imagepath: DataTypes.TEXT,
    thumnailpath: DataTypes.TEXT,
    availability: DataTypes.BOOLEAN,
    summary: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
    Products.belongsTo(models.Category,{foreignKey:'categoryId'});
    Products.belongsTo(models.Brands,{foreignKey:'bracdId'});
    Products.hasMany(models.PrductColor,{foreignKey:'ProductId'});
    Products.hasMany(models.ProductSpecifications,{foreignKey:'ProductId'});
    Products.hasMany(models.Comment,{foreignKey:'ProductId'});
    Products.hasMany(models.Review,{foreignKey:'ProductId'});
  };
  return Products;
};