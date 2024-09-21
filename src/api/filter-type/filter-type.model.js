const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name:{
        type:String,
        required:true,
    },
    createdBy:{
        type:String,
        required:true,
    },
    updatedBy:{
        type:String,
        required:true,
    },
    category:{
        type:Types.ObjectId,
        ref: 'Category',
        required:true,
    },
    _destroy:{
        type:Boolean,
        select: false
    },
},{
  timestamps: true
});

module.exports = model('FilterType', schema);