'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tab_checklist_eletrica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tab_checklist_eletrica.init({
    departamento_checklist_eletrica: DataTypes.STRING,
    condutor_checklist_eletrica: DataTypes.STRING,
    placa_veiculo_checklist_eletrica: DataTypes.STRING,
    bateria_inicial_checklist_eletrica: DataTypes.INTEGER,
    foto_bateria_inicial_checklist_eletrica: DataTypes.STRING,
    bateria_final_checklist_eletrica: DataTypes.INTEGER,
    foto_bateria_final_checklist_eletrica: DataTypes.STRING,
    diferenca_bateria_checklist_eletrica: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tab_checklist_eletrica',
  });
  return Tab_checklist_eletrica;
};