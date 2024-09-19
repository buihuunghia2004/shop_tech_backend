const { Schema, model } = require('mongoose')
const { ROLE } = require('@/utils/constant')

const DOCUMENT_NAME = 'Manager'
const COLLECTION_NAME = 'managers'

var schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [Number],
    enum: [ROLE.MANAGER],
    default: [],
  },
  _destroy: {
    type: Boolean,
    default: false,
  },
},{
  timestamps: true
})

module.exports = model(DOCUMENT_NAME, schema)
