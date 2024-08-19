import { QueryInterface } from 'sequelize'

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('Examples', [
      {
        name: 'Exemplo 1',
        // Rest of the properties...
      },
      {
        name: 'Exemplo 2',
      },
    ], {})
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Examples', {}, {})
  },
}
