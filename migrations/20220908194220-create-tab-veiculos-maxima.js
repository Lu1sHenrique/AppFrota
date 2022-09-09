'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tab_veiculos_maximas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modelo_veiculo_maxima: {
        type: Sequelize.STRING
      },
      ano_veiculo_maxima: {
        type: Sequelize.STRING
      },
      placa_veiculo_maxima: {
        type: Sequelize.STRING
      },
      cor_veiculo_maxima: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tab_veiculos_maximas');
  }
};