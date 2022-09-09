'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tab_checklist_eletricas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      departamento_checklist_eletrica: {
        type: Sequelize.STRING
      },
      condutor_checklist_eletrica: {
        type: Sequelize.STRING
      },
      placa_veiculo_checklist_eletrica: {
        type: Sequelize.STRING
      },
      bateria_inicial_checklist_eletrica: {
        type: Sequelize.INTEGER
      },
      foto_bateria_inicial_checklist_eletrica: {
        type: Sequelize.STRING
      },
      bateria_final_checklist_eletrica: {
        type: Sequelize.INTEGER
      },
      foto_bateria_final_checklist_eletrica: {
        type: Sequelize.STRING
      },
      diferenca_bateria_checklist_eletrica: {
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
    await queryInterface.dropTable('Tab_checklist_eletricas');
  }
};