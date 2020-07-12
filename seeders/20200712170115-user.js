'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let currentDate = new Date();
   return await queryInterface.bulkInsert('Users', [{
    name: 'Kavita Bhakuni',
    email: 'kavita.b@gmail.com',
    password: '$2b$10$vX3uNCKX3vm8pOHE3E8Kj.0jfjE3h5NPR94fYZMl1bDwIsbFR4nMa',
    phone:'9898989898',
    created_at: currentDate,
    updated_at: currentDate
}
])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
    
  }
};
