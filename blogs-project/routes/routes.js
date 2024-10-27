const express = require('express');
const router = express.Router();
const { logIn, signUp, blogs, signUp_post, logIn_post } = require('../controllers/user.controller');
const mongoose = require('mongoose');
mongoose.connect

router.get('/', logIn);
router.get('/signup', signUp);
router.get('/blogs', blogs);
// router.get('/home', home);
router.post('/signup', signUp_post);
router.post('/login', logIn_post);

module.exports = router