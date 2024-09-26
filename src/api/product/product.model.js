const {Schema, model, Types} = require('mongoose')

const productSchema = new Schema({
    name:{type:String,required:true,unique:true},
    slug:{type:String,required:true,unique:true},
    imgUrl:{type:String,required:true},
    imgPId:{type:String,required:true,},
    quantity:{type:Number,min:0,default:0},
    price:{type:Number,required:true,min:0},
    images:{
        type:[{
            imgUrl:{type:String,required:true},
            imgPId:{type:String,required:true},
        }],
        required:true
    },
    description:{type:String,required:true},
    brand:{type:Types.ObjectId,ref: 'Brand',required:true,},
    category:{type:Types.ObjectId,ref: 'Category',required:true,},
    filters:{type:[Types.ObjectId],ref: 'Filter',required:true},
    specs:{type:Schema.Types.Mixed,required:true},
    attributes:{type:Schema.Types.Mixed,default:{}},
    isPublish:{type:Boolean,default:false},
    createdBy:{type:Types.ObjectId,ref: 'Manager',required:true,},
    updatedBy:{type:Types.ObjectId,ref: 'Manager',required:true,},
    _destroy:{type:Boolean,select: false},
},{
  timestamps: true
});

// const laptopSchema = new Schema({
// },{
//   timestamps: true
// });

const smartWatchSchema = new Schema({
    colorName:{type:String,required:true},
    colorCode:{type:String,required:true},
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
},{
  timestamps: true
});
const smartphoneSchema = new Schema({
    colorName:{type:String,required:true},
    colorCode:{type:String,required:true},
    optionName:{type:String,required:true},
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
},{
  timestamps: true
});
const tabletSchema = new Schema({
    colorName:{type:String,required:true},
    colorCode:{type:String,required:true},
    optionName:{type:String,required:true},
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
},{
  timestamps: true
});

module.exports = {
    Product: model('Product', productSchema),
    Smartphone: model('Smartphone', smartphoneSchema),
    Tablet: model('Tablet', tabletSchema),
    SmartWatch: model('SmartWatch', smartWatchSchema),
}

