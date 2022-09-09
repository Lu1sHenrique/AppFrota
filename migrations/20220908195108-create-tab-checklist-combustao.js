'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tab_checklist_combustaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carro_maxima_checklist_combustao: {
        type: Sequelize.STRING
      },
      carro_reserva_checklist_combustao: {
        type: Sequelize.STRING
      },
      departamento_checklist_combustao: {
        type: Sequelize.STRING
      },
      condutor_checklist_combustao: {
        type: Sequelize.STRING
      },
      placa_veiculo_checklist_combustao: {
        type: Sequelize.STRING
      },
      km_inicial_checklist_combustao: {
        type: Sequelize.INTEGER
      },
      foto_km_inicial_checklist_combustao: {
        type: Sequelize.STRING
      },
      km_final_checklist_combustao: {
        type: Sequelize.INTEGER
      },
      foto_km_final_checklist_combustao: {
        type: Sequelize.STRING
      },
      rota_ronda_checklist_combustao: {
        type: Sequelize.STRING
      },
      troca_oleo_checklist_combustao: {
        type: Sequelize.INTEGER
      },
      pneu_checklist_combustao: {
        type: Sequelize.INTEGER
      },
      correias_checklist_combustao: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Tab_checklist_combustaos');
  }
};