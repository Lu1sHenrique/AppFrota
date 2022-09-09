'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tab_departamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tab_departamento.hasMany(models.Usuario);
      Tab_departamento.hasMany(models.Tab_condutor);
    }
  }
  Tab_departamento.init({
    nome_departamento: DataTypes.STRING,
    UsuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tab_departamento',
  });
  return Tab_departamento;
};