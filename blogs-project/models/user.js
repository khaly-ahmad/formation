const mongoose = require('mongoose');
const { isEmail } = require('validator');
const Schema = mongoose.Schema
const userSchema = new Schema({
    profil: {
        type: String,
        default: "../images/2024110213043705.png"
    },
    firstName: {
        type: String,
        required: [true,'please enter a first name'] 
    }, lastName: {
        type: String,
        required: [true,'please enter a last name']
    },email: {
        type: String,
        required: [true,'please enter an email'],
        unique: true,
        lowercase: true,
        validate: [ isEmail , 'please enter a valid email']
    },password: {
        type: String,
        required: [true,'please enter an password'],
        minlength: [ 6, 'please enter a valide password']
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;