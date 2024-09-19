const { create } = require('lodash');
const { ROLE } = require('../src/utils/constant')
const bcrypt = require('bcrypt')

module.exports = {
  async up(db, client) {
    console.log(process.env.ADMIN_PASSWORD);
    console.log(ROLE.MANAGER);
    
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(process.env.ADMIN_PASSWORD, salt)
    const manager = {
      username: process.env.ADMIN_USERNAME,
      password,
      email: process.env.ADMIN_EMAIL,
      roles: [ROLE.MANAGER],
      createBy: 'system',
      updateBy: 'system',
      createdAt: new Date(),
      updatedAt: new Date(),
      _destroy: false
    }

    await db.collection('managers').insertOne(manager)
  },

  async down(db, client) {
    await db.collection('managers').deleteOne({ username: 'manager' })
  }
};
