const {Schema, model, Types} = require('mongoose')

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
    imgUrl:{
        type:String,
        required:true,
    },
    imgPId:{
        type:String,
        required:true,
    },
    createdBy:{
        type:Types.ObjectId,
        ref: 'Manager',
        required:true,
    },
    updatedBy:{
        type:Types.ObjectId,
        ref: 'Manager',
        required:true,
    },
    _destroy:{
        type:Boolean,
        select: false
    },
},{
  timestamps: true
});

module.exports = model('Brand', schema);