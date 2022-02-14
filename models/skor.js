'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Skor.init({
    username: DataTypes.STRING,
    skor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Skor',
  });
  return Skor;
};