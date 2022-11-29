'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vacinas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vacinas.init({
    name: DataTypes.STRING,
    producer: DataTypes.STRING,
    dosage: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vacinas',
  });
  return Vacinas;
};