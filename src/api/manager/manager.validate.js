const Joi = require('joi')
const {
  STRING,ROLES,
  EMAIL,
  BOOLEAN,
} = require('@utils/joi-constant')
const { validate } = require('./manager.err')

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

const updateByIdSchema = Joi.object({
  username: STRING.messages(validate.username),
  email: EMAIL.messages(validate.email),
  password: STRING.min(6).max(30).messages(validate.password),
  roles: ROLES.messages(validate.roles),
  _destroy: BOOLEAN.messages(validate._destroy),
  isActive: BOOLEAN.messages(validate.isActive),
})

module.exports = {
  createSchema,
  loginSchema,
  updateByIdSchema
}
