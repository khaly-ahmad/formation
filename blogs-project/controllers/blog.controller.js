const Blog = require('../models/blogs');
const multer = require('multer');
const ejs = require('ejs');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'blog_images',
        allowed_formats: ['jpeg', 'png', 'jpg', 'webp']
    }
})

const upload = multer({ storage });
const uploaded = upload.single('image')

module.exports = uploaded;
