'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tab_checklist_combustao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tab_checklist_combustao.init({
    carro_maxima_checklist_combustao: DataTypes.STRING,
    carro_reserva_checklist_combustao: DataTypes.STRING,
    departamento_checklist_combustao: DataTypes.STRING,
    condutor_checklist_combustao: DataTypes.STRING,
    placa_veiculo_checklist_combustao: DataTypes.STRING,
    km_inicial_checklist_combustao: DataTypes.INTEGER,
    foto_km_inicial_checklist_combustao: DataTypes.STRING,
    km_final_checklist_combustao: DataTypes.INTEGER,
    foto_km_final_checklist_combustao: DataTypes.STRING,
    rota_ronda_checklist_combustao: DataTypes.STRING,
    troca_oleo_checklist_combustao: DataTypes.INTEGER,
    pneu_checklist_combustao: DataTypes.INTEGER,
    correias_checklist_combustao: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tab_checklist_combustao',
  });
  return Tab_checklist_combustao;
};