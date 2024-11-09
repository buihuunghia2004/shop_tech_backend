const { Schema, model, Types } = require('mongoose')
const { USER_ROLES } = require('../../utils/constant')

var schema = new Schema(
  {
    username: {
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
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    recieverInfos: {
      type: [{
        phoneNumber: {type: String},
        name: {type: String},
        address: {type: String},
        latitude: {type: Number},
        longitude: {type: Number},
        isDefault: {type: Boolean},
      }],
      default: true,
    },
    cart: {
      type: [{
        sku: {type: Types.ObjectId, ref: 'Sku'},
        quantity: {type: Number, default: 1},
      }],
      default: [],
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('User', schema)
