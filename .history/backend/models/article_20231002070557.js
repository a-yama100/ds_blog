'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    // ...
  });
  }
  Article.associate = function(models) {
    // ...
    Article.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category'
    });
    return Article;
  };
};