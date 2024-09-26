const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    colorName:{type:String,required:true},
    colorCode:{type:String,required:true},
    optionName:{type:String,required:true},
    
});

//Export the model
module.exports = mongoose.model('User', userSchema);