const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary');
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'profil-image',
        allowed_formats: ['jpeg', 'png', 'jpg', 'webp']
    }
})

const upload = multer({ storage });
const uploadProfil = upload.single('image');
module.exports = uploadProfil;