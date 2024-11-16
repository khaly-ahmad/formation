const express = require('express');
const { get_login, post_login, get_signup, post_signup } = require('../controllers/connect.controller');
const router = express.Router();
const protectRoute = require('../middleware/athentication');
const  { sendMessage, getMessages }  = require('../controllers/message.controller');


router.get('/login', get_login);
router.post('/login', protectRoute, post_login)
router.get('/signup', get_signup)
router.post('/signup', protectRoute, post_signup);

// send message route
router.get('/message/:id',protectRoute,getMessages)
router.post('/message/:id',protectRoute,sendMessage)
module.exports = router; 