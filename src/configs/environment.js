require('dotenv').config();

const development = {
  app:{
    port: process.env.DEV_APP_PORT || 3000
  },
  db:{
    url: 'mongodb://localhost:27017/',
    name: 'shop_tech',
    options: ''
  }
}

const production = {
  app:{
    port: process.env.PRO_APP_PORT || 3000
  },
  db:{
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/',
    name: process.env.MONGO_DB_NAME || 'shop_tech',
    options: '?retryWrites=true&w=majority&appName=Cluster0'
  }
}

const config = {development, production}
const env = process.env.NODE_ENV || 'development'
module.exports = config[env]