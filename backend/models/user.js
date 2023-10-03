// E:\programming\Project\ds_blog\backend\models\user.js

'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }

    // パスワードの比較メソッドを追加
    validPassword(password) {
      return bcrypt.compareSync(password, this.password);
    }
  }

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {  // パスワードのハッシュ化
        const hash = bcrypt.hashSync(value, 10);  // 10はソルトのラウンド数
        this.setDataValue('password', hash);
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      // レコードの作成や更新時にパスワードをハッシュ化
      beforeCreate: (user) => {
        user.password = bcrypt.hashSync(user.password, 10);
      },
      beforeUpdate: (user) => {
        if (user.changed('password')) {
          user.password = bcrypt.hashSync(user.password, 10);
        }
      }
    }
  });

  return User;
};
