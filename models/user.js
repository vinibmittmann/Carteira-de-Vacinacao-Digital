'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    birth: DataTypes.DATE,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.authenticate = async function(email, password) {
    try {
      const user = await User.findOne({ where: { email } });

      if (user.password == password) return true;
      return false
    } catch (TypeError) {
      return false;
    }
  }

  return User;
};
