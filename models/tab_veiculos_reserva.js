'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tab_veiculos_reserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tab_veiculos_reserva.init({
    modelo_veiculo_reserva: DataTypes.STRING,
    ano_veiculo_reserva: DataTypes.STRING,
    placa_veiculo_reserva: DataTypes.STRING,
    cor_veiculo_reserva: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tab_veiculos_reserva',
  });
  return Tab_veiculos_reserva;
};