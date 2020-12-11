const mongoose = require('mongoose');

const category = new mongoose.Schema({
    name : {
        type :String,
        lowercase : true
    },
    type : {
        type : String
    },
    make : {
        type : String,
    },
    createdAt : {
        type: Date,
        default : Date.now()
    }
});

const Category = mongoose.model('Category' ,category );
module.exports = Category
