// E:\programming\Project\ds_blog\backend\config\config.js

require('dotenv').config();

module.exports = {
  "development": {
    "username": "postgres",
    "password": process.env.DB_PASSWORD,
    "database": "ds_blog",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": "postgres",
    "password": process.env.DB_PASSWORD,
    "database": "ds_blog_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": process.env.DB_PASSWORD,
    "database": "ds_blog_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
