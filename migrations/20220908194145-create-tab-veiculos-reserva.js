'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tab_veiculos_reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modelo_veiculo_reserva: {
        type: Sequelize.STRING
      },
      ano_veiculo_reserva: {
        type: Sequelize.STRING
      },
      placa_veiculo_reserva: {
        type: Sequelize.STRING
      },
      cor_veiculo_reserva: {
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
    await queryInterface.dropTable('Tab_veiculos_reservas');
  }
};