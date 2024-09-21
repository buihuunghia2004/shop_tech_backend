const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    createdBy:{
        type:String,
        required:true,
    },
    updatedBy:{
        type:String,
        required:true,
    },
    _destroy:{
        type:Boolean,
        select: false
    },
    filterType:{
        type:Types.ObjectId,
        ref: 'FilterType',
        required:true,
    },
},{
  timestamps: true
});

module.exports = model('Filter', schema);