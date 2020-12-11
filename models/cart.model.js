const mongoose = require('mongoose');
let { ObjectId } = mongoose.Schema.Types
const category = new mongoose.Schema({

    userId: {
        type: ObjectId,
        ref: 'User',
        require: true
    },
    productId: {
        type: ObjectId,
        ref: 'Product',
        require: true
    },
    totalAmount : {
        type : Number
    },
    quantity : {
        type : Number
    },
    orderStatus : {
        type : String,
    },
    createdAt : {
        type: Date,
        default : Date.now()
    }
});

const Category = mongoose.model('Category' ,category );

module.exports = Category
