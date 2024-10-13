const Joi = require('joi')
const {
  STRING,
  BOOLEAN,
  URL,
  OBJECT_ID
} = require('@utils/joi-constant')
const { validate } = require('./brand.error')

const createSchema = Joi.object({
  name: STRING.required().messages(validate.name),
  categoryId: STRING.required().messages(validate.categoryId),
  image: URL.required().messages(validate.image),
})

const updateByIdSchema = Joi.object({
  name: STRING.messages(validate.name),
  image: URL.required().messages(validate.image),
  _destroy: BOOLEAN.messages(validate._destroy)
})

module.exports = {
  createSchema,
  updateByIdSchema
}
