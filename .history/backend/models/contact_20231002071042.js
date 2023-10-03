// E:\programming\Project\ds_blog\backend\models\contact.js

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    static associate(models) {
      // define association here
    }
  }
  Contact.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    message: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};