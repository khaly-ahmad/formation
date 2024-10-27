const mongoose = require('mongoose');
const Schema = mongoose.Schema
const blogSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    }

});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog