require('dotenv').config();
const { default: mongoose } = require('mongoose')
const { db: {url, name, options} } = require('../configs/environment')

class Database {
  constructor() {
    this.connect()
  }
  connect() {
    if (1 === 1) {
      mongoose.set('debug', true)
      mongoose.set('debug', { color: true })
    }
    mongoose
      .connect(url+name+options)
      .then(() => {
        console.log('MongoDB connected')
      })
      .catch((err) => {
        console.log('MongoDB connection error::', err)
      })
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }
}

const instanceDB = Database.getInstance()
module.exports = instanceDB
