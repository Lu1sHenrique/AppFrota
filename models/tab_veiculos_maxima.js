'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tab_veiculos_maxima extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tab_veiculos_maxima.init({
    modelo_veiculo_maxima: DataTypes.STRING,
    ano_veiculo_maxima: DataTypes.STRING,
    placa_veiculo_maxima: DataTypes.STRING,
    cor_veiculo_maxima: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tab_veiculos_maxima',
  });
  return Tab_veiculos_maxima;
};