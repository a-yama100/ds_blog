// E:\programming\Project\ds_blog\backend\models\category.js

'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Article, {
        foreignKey: 'categoryId',
        as: 'articles'
      });
    }
  }

  Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category'
  });

  return Category;
};
