const { Schema, model } = require('mongoose')
const { ROLE } = require('@/utils/constant')

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
    type: [String],
    enum: [ROLE.MANAGER,ROLE.STAFF1,ROLE.STAFF2,ROLE.STAFF3],
    default: [],
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Manager',
  },
  updatedBy: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Manager',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  _destroy: {
    type: Boolean,
    default: false,
    select: false
  },
},{
  timestamps: true
})

module.exports = model('Manager', schema)
