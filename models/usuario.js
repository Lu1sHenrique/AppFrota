'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.hasOne(models.Tab_departamento);
      Usuario.hasOne(models.Tab_condutor);
    }
  }
  Usuario.init({
    nome_usuario: DataTypes.STRING,
    senha: DataTypes.STRING,
    codigo_departamento: DataTypes.INTEGER,
    TabCondutorId: DataTypes.INTEGER,
    TabDepartamentoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};