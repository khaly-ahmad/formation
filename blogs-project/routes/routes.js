const express = require('express');
const router = express.Router();
const { logIn, signUp, blogs, signUp_post, logIn_post, createBlog } = require('../controllers/user.controller');
const authenticateToken = require('../middlewares/authenticate')
const uploaded = require('../controllers/blog.controller');

router.get('/', logIn);
router.get('/signup', signUp);
router.get('/blogs',authenticateToken, blogs);
router.post('/signup', signUp_post);
router.post('/login', logIn_post);
router.post('/blogs',authenticateToken, uploaded, createBlog);

module.exports = router