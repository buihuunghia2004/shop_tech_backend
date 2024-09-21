const Joi = require('joi')
const {
  STRING,
  BOOLEAN,
  OBJECT_ID,
} = require('@utils/joi-constant')
const { validate } = require('./filter.error')

const createSchema = Joi.object({
  name: STRING.required().messages(validate.name),
  filterTypeId: STRING.required().messages(validate.filterTypeId),
})

const updateByIdSchema = Joi.object({
  name: STRING.messages(validate.name),
  _destroy: BOOLEAN.messages(validate._destroy)
})

const getById = Joi.object({
  _id: OBJECT_ID.required().messages(validate.id)
})

module.exports = {
  createSchema,
  updateByIdSchema,
  getById
}
