E:\programming\Project\ds_blog\backend\models\category.js

'use strict';
const {
  Model
} = require('sequelize');
// models/category.js
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    // ...
  });

  Category.associate = function(models) {
    Category.hasMany(models.Article, {
      foreignKey: 'categoryId',
      as: 'articles'
    });
  };

  return Category;
};
