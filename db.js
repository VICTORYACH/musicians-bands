const path = require('path');
const { Sequelize, Model } = require('sequelize');

// TODO - create the new sequelize connection
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});
module.exports = {
    sequelize,
    Sequelize
};
