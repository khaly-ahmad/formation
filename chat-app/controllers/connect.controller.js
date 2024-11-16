// 
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

function setCookies(userId,res){
    const token = jwt.sign({ userId }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.cookie('jwt', token, { httpOnly: true });
}

const post_login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'all of these is required!' })
    }
    try {
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user?.password || '');
        if (!user || !isMatch) { 
            return res.status(400).json({ error: "email or password incorrect" })
        }
        const users = await User.find();
        setCookies(user._id,res);
        const _id = req.userId;
        res.status(200).json({ _id });
    } catch (error) {
        console.log(error)
    }
}

const post_signup = async (req, res) => {
    const { fullname, email, password, confirmPassword } = req.body;
    if (!fullname || !email || !password || !confirmPassword) {
        return res.status(400).json({ error: 'all of these is required!' })
    }
    if (password != confirmPassword) {
        return res.status(400).json({ error: "password not match try again" })
    }
    try {
        const userExisting = await User.findOne({ email });
        if (userExisting) {
            return res.status(402).json({ error: 'user already exist' })
        }
        const newUser = new User({
            fullname,
            email,
            password
        })
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt)
        await newUser.save();
        setCookies(newUser._id,res);
        res.status(200).json({ newUser });
    } catch (error) {
        console.log(error);
    }
}

const get_login = (req, res) => {
    res.status(200).json({ greating: "hello everybody" });
}

const get_signup = (req, res) => {
    res.status(200).json({ information: "you can signup here" });
}

module.exports = { get_login, post_login, get_signup, post_signup };
