const Joi = require('joi')
const {
  JoiConst: { STRING },
} = require('@utils/joi-constant')
const { validate } = require('./manager.err')

/**
 * username
 * email
 * password
 * roles
 * _destroy
 */

const registerManager = Joi.object({
  username: STRING.required().messages(validate.username),
  email: STRING.required().messages(validate.email),
  password: STRING.required().messages(validate.password),
})

module.exports = {
  registerManager,
}
