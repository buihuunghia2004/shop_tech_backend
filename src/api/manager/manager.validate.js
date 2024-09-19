const Joi = require('joi')
const {
  STRING,
} = require('@utils/joi-constant')
const { validate } = require('./manager.err')

/**
 * username
 * email
 * password
 * roles
 * _destroy
 */

const registerSchema = Joi.object({
  username: STRING.required().messages(validate.username),
  email: STRING.required().messages(validate.email),
  password: STRING.required().messages(validate.password),
})

const loginSchema = Joi.object({
  login: STRING.required().messages(validate.login),
  password: STRING.required().messages(validate.password),
})

module.exports = {
  registerSchema,
  loginSchema,
}
