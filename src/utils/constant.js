require('dotenv').config()

const ROLE= {
  MANAGER: process.env.APP_ROLE_MANAGER,
  USER: process.env.APP_ROLE_STRAFF,
  USER1: process.env.APP_ROLE_USER1,
  USER2: process.env.APP_ROLE_USER2,
  USER3: process.env.APP_ROLE_USER3,
}

const JWT = {
  JWT_ACCESS_LIFE: process.env.JWT_ACCESS_LIFE || '7d',
  JWT_REFRESH_LIFE: process.env.JWT_REFRESH_LIFE || '30d',
}



module.exports = {
  ROLE,
  JWT
}