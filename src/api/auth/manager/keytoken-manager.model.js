const { Schema, model } = require('mongoose')

const DOCUMENT_NAME = 'KeyTokenManager'
const COLLECTION_NAME = 'manager_keys'

var schema = new Schema(
  {
    manager: {
      type: String,
      required: true,
      unique: true,
    },
    privateKey: {
      type: String,
      required: true,
    },
    publicKey: {
      type: String,
      required: true,
    },
    refreshTokens: {
      type: [String],
      default: [],
    },
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true,
  }
)

module.exports = model(DOCUMENT_NAME, schema)
