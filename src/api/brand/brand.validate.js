const Joi = require('joi')
const {
  STRING,
  BOOLEAN,
  URL
} = require('@utils/joi-constant')
const { validate } = require('./brand.error')

const createSchema = Joi.object({
  name: STRING.required().messages(validate.name),
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
