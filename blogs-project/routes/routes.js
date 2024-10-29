const express = require('express');
const router = express.Router();
const { logIn, signUp, blogs, signUp_post, logIn_post, createBlog } = require('../controllers/user.controller');
const uploaded = require('../controllers/blog.controller')
//error handdler
// const errorHandler = require('../middlewares/errorHandlers');
// router.use(errorHandler)

router.get('/', logIn);
router.get('/signup', signUp);
router.get('/blogs', blogs);
// router.get('/home', home);
router.post('/signup', signUp_post);
router.post('/login', logIn_post);
router.post('/blogs', uploaded, createBlog);


module.exports = router