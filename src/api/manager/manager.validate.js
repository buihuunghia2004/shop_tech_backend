const Joi = require('joi')
const {
  STRING,ROLES,
  EMAIL,
} = require('@utils/joi-constant')
const { validate } = require('./manager.err')

/**
 * username
 * email
 * password
 * roles
 * _destroy
 */

const createSchema = Joi.object({
  username: STRING.required().messages(validate.username),
  email: EMAIL.required().messages(validate.email),
  password: STRING.required().min(6).max(30).messages(validate.password),
  roles: ROLES.required().messages(validate.roles),
})

const loginSchema = Joi.object({
  login: STRING.required().messages(validate.login),
  password: STRING.required().messages(validate.password),
})

module.exports = {
  createSchema,
  loginSchema,
}
