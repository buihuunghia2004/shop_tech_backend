const { Schema, model } = require('mongoose')
const { ROLE } = require('@/utils/constant')
const { ref } = require('joi')

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
  _destroy: {
    type: Boolean,
    default: false,
  },
},{
  timestamps: true
})

module.exports = model('Manager', schema)
