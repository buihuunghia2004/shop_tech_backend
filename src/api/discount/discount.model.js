const { DISCOUNT_TYPE : { FIXED, PERCENT} } = require('@/utils/constant')
const { Schema, model, Types } = require('mongoose')

var schema = new Schema(
  {
    description: { type: String, required: true },
    value: { type: Number, required: true },
    type: { type: String, required: true, enum: [FIXED, PERCENT] },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    staffId: { type: Types.ObjectId, required: true, ref: 'Manager' },
    skuId: { type: Types.ObjectId, required: true, ref: 'Sku' },
    maxUsage: { type: Number, required: true },
    usage: { type: Number, default: 0 },
    _destroy: { type: Boolean, select: false },
  },
  {
    timestamps: true
  }
)

module.exports = model('Discount', schema)
