const mongoose = require('mongoose');
let { ObjectId } = mongoose.Schema.Types
const category = new mongoose.Schema({
    name : {
        type :String,
        lowercase : true
    },
    price : {
        type : String
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        require: true
    },
    detail : {
        type : String,
    },
    createdAt : {
        type: Date,
        default : Date.now()
    }
});

const Category = mongoose.model('Category' ,category );

module.exports = Category
