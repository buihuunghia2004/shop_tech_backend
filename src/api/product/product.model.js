const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name:{type:String,required:true,unique:true},
    slug:{type:String,required:true,unique:true},
    image:{type:String,required:true},
    description:{type:String,required:true},
    attributes:{type:Schema.Types.Mixed,default:{}},
    specs:{type:Schema.Types.Mixed,default:{}},
    defaultSku:{type:Schema.Types.Mixed,default:{}},
    category:{type:Types.ObjectId,ref: 'Category',required:true},
    brand:{type:Types.ObjectId,ref: 'Brand',required:true},
    createdBy:{type:Types.ObjectId,ref: 'Manager',required:true,},
    updatedBy:{type:Types.ObjectId,ref: 'Manager',required:true,},
    _destroy:{type:Boolean,select: false,default:false},
    isPublish:{type:Boolean,default:false},
},{
  timestamps: true
});

module.exports = model('Product', schema);