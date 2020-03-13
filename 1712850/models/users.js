'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    ursername: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    fullname: DataTypes.STRING,
    avatarPath: DataTypes.TEXT,
    isAdmin: DataTypes.BOOLEAN
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
    Users.hasMany(models.Comment,{foreignKey:'UserId'});
    Users.hasMany(models.Review,{foreignKey:'UserId'});

  };
  return Users;
};