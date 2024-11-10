const express = require('express');
const router = express.Router();
const { logIn, signUp, blogs, signUp_post, logIn_post, createBlog,get_updateProfil, updateProfil, createBlog_get, addComment } = require('../controllers/user.controller');
const authenticateToken = require('../middlewares/authenticate');
const upload = require('../controllers/profil.image')
const uploaded = require('../controllers/blog.controller');

router.get('/', logIn);
router.get('/signup', signUp);
router.get('/blogs',authenticateToken, blogs);
router.post('/signup', signUp_post);
router.post('/login', logIn_post);
router.post('/blogs/create',authenticateToken, uploaded, createBlog);
router.get('/blogs/create',authenticateToken,createBlog_get)
router.get('/blogs/update',authenticateToken,get_updateProfil);
router.post('/blogs/update',authenticateToken, upload.single('myProfil') ,updateProfil);
router.post('/blogs/comment',authenticateToken,addComment)

module.exports = router