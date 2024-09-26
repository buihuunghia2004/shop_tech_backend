const Joi = require('joi')
const {
  STRING,
  BOOLEAN,
  URL,
  OBJECT_ID
} = require('@utils/joi-constant')
const { validate } = require('./product.error')

const createSchema = Joi.object({
  name: STRING.required().messages(validate.name),
  categoryId: STRING.required().messages(validate.categoryId),
  imgUrl: URL.required().messages(validate.imgUrl),
  imgPId: STRING.required().messages(validate.imgPId),
})

const updateByIdSchema = Joi.object({
  name: STRING.messages(validate.name),
  imgUrl: URL.required().messages(validate.imgUrl),
  imgPId: STRING.required().messages(validate.imgPId),
  _destroy: BOOLEAN.messages(validate._destroy)
})

module.exports = {
  createSchema,
  updateByIdSchema
}
