// E:\programming\Project\ds_blog\backend\models\article.js

'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static associate(models) {
      // ...
      Article.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        as: 'category'
      });
    }
  }

  Article.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Article'
  });

  return Article;
};
