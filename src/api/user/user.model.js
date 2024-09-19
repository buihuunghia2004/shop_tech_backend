const { Schema, model } = require('mongoose')
const { USER_ROLES } = require('../../utils/constant')

const DOCUMENT_NAME = 'User'
const COLLECTION_NAME = 'users'

var schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      index: true,
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
      type: [String],
      enum: [USER_ROLES.USER1, USER_ROLES.USER2, USER_ROLES.USER3],
      default: [USER_ROLES.USER1],
    }
  },
  {
    timestamps: true,
    collation: COLLECTION_NAME,
  }
)

module.exports = model(DOCUMENT_NAME, schema)
