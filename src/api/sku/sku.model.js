const {Schema, model, Types} = require('mongoose')

var schema = new Schema({
    name:{type:String,required:true},
    attrIndex:{type:[Number]},
    images:{type:[String],required:true},
    price:{type:Number,required:true},
    filters:{type:[String],required:true,select: false},
    default:{type:Boolean,default:false},
    isPublic:{type:Boolean,default:false},
    product:{type:Types.ObjectId,ref: 'Product',required:true},
    inventory:{type:Types.ObjectId,ref: 'Inventory',default:null},
    _destroy:{type:Boolean,select: false},
});

module.exports = model('Sku', schema)