'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Worker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Worker.init({
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    birth: DataTypes.DATE,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Worker',
  });

  Worker.authenticate = async function(email, password) {
    try {
      const worker = await Worker.findOne({ where: { email } });

      if (worker.password == password) return true;
      return false
    } catch (TypeError) {
      return false;
    }
  }

  return Worker;
};
