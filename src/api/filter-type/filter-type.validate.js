const Joi = require('joi')
const {
  STRING,
  BOOLEAN,
} = require('@utils/joi-constant')
const { validate } = require('./filter-type.error')

const createSchema = Joi.object({
  name: STRING.required().messages(validate.name),
  categoryId: STRING.required().messages(validate.categoryId),
})

const updateByIdSchema = Joi.object({
  name: STRING.messages(validate.name),
  categoryId: STRING.messages(validate.categoryId),
  _destroy: BOOLEAN.messages(validate._destroy)
})

module.exports = {
  createSchema,
  updateByIdSchema
}
