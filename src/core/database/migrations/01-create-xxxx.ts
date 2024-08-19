import { QueryInterface /* DataTypes */ } from 'sequelize'

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('Examples', {
      // Code here...
    })
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('Examples')
  },
}
