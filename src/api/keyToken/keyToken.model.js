const { Schema, model } = require('mongoose')

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
    timestamps: true,
  }
)

module.exports = model('KeyToken', schema)
