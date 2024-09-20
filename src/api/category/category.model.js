const {Schema, model} = require('mongoose')

const schema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    slug:{
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
    brands:{
        type:[Schema.Types.ObjectId],
        ref: 'Brand',
    },
    _destroy:{
        type:Boolean,
        select: false
    },
},{
  timestamps: true
});

module.exports = model('Category', schema);