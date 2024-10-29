const mongoose = require('mongoose');
const { isEmail } = require('validator');
const { validate } = require('../../nodeJS/models/blog');
const Schema = mongoose.Schema
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    }, lastName: {
        type: String,
        required: true
    },email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: isEmail,
            message: 'please enter a valide email' 
        }
    },password: {
        type: String,
        required: true,
        unique: false,
        minlength: [6, 'please enter a valide password']
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;