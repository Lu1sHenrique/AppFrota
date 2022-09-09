'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tab_condutor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tab_condutor.belongsTo(models.Tab_departamento);
      Tab_condutor.hasOne(models.Usuario);
    }
  }
  Tab_condutor.init({
    nome_condutor: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER,
    departamentoId: DataTypes.INTEGER,
    TabDepartamentoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tab_condutor',
  });
  return Tab_condutor;
};