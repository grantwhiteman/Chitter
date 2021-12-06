'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.Peeps = this.hasMany(models.Peep, { onDelete: 'cascade' })
    }
  };
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};