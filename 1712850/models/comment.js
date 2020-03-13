'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    message: DataTypes.TEXT
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Users,{foreignKey:'UserId'});
    Comment.belongsTo(models.Products,{foreignKey:'ProductId'});
    Comment.belongsTo(models.Comment,{as: 'ParentComment', foreignKey:'ParentCommentId'});
    Comment.hasMany(models.Comment,{as: 'SubComment', foreignKey:'ParentCommentId'});
  };
  return Comment;
};