const mongoose = require('mongoose');
const User = require('./user');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, { timestamps: true })


const blogSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    comments: [commentSchema]

}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog