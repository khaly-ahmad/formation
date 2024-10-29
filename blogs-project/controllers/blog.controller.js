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

// const createBlog = [
//     upload.single('image'),
//     async (req, res) => {
//         const { content } = req.body;
//         const imageUrl = req.file.path;
//         const blog = new Blog({
//             content,
//             image: imageUrl,
//             author: null
//         });
//         try {
//             await blog.save();
//             res.redirect('/blogs');
//         } catch (error) {
//             console.log(error)
//         }
//     }
// ]
module.exports = uploaded;
