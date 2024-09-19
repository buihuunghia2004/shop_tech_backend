const { Schema, model } = require('mongoose')

const DOCUMENT_NAME = 'KeyTokenUser'
const COLLECTION_NAME = 'user_keys'

var schema = new Schema(
  {
    user: {
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
