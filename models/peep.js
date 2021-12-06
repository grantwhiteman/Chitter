'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Peep extends Model {
    static associate(models) {
      this.User = this.belongsTo(models.User)
    }
  };
  Peep.init({
    text: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Peep',
  });
  return Peep;
};