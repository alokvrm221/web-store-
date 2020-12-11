const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const user = new mongoose.Schema({
    name : {
        type :String,
        lowercase : true
    },
    password: {
        type : String
    },
    phoneNo : {
        type : Number
    },
    email : {
        type : String,
        unique : true
    },
    createdAt : {
        type: Date,
        default : Date.now()
    }
});


user.methods.comparePassword = function (candidatePassword) {
    console.log('this', this.password, 'candidatePassword', candidatePassword);
    return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User' ,user );

module.exports = User
