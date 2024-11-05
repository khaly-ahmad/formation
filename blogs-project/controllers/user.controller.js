const User = require('../models/user');
const bcrypt = require('bcrypt');
const Blog = require('../models/blogs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const errorHandler = (err) => {
    let errors = { email: '', password: '', lastName: '', firstName: '' }
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        })
    }
    return errors
}

// login route=========================================================================
const logIn = (req, res) => {
    res.render('logIn', { errors: null })
}

const logIn_post = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password)
        if (!user || !isMatch) {
            return res.status(400).render('logIn', { errors: 'email ou password incorrect' });
        }

        const usr = { _id: `${user._id}`, name: `${user.firstName} ${user.lastName}`, email: `${user.email}` }
        const token = jwt.sign({ usr }, process.env.MON_SECRET, { expiresIn: '1h' })

        res.cookie('jwt', token, { httpOnly: true, });
        res.redirect(`/blogs`)
    } catch (err) { errorHandler(err) }
}

// sign up route ==============================================================================

const signUp = (req, res) => {
    res.render('signUp', { passwordError: null, emailError: null });
}

const signUp_post = async (req, res, next) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    let passwordError = '';
    let emailError = '';

    if (password !== confirmPassword) {
        passwordError = 'Mot de passe non identiques'
        return res.status(400).render('signUp', { passwordError, emailError });
    }
    try {
        const userExist = await User.findOne({ email });
        const newUser = new User({ firstName, lastName, email, password })
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt)
        await newUser.save();
        // generate a token
        const usr = { _id: `${newUser._id}`, name: `${newUser.firstName} ${newUser.lastName}`, email: `${newUser.email}` }
        const token = jwt.sign({ usr }, process.env.MON_SECRET, { expiresIn: '1h' })
        res.cookie('jwt', token, { httpOnly: true, })
        res.status(302).redirect(`/blogs`);
    } catch (err) {
        const error = errorHandler(err);
        res.status(500).render('signUp', { passwordError: error.password, emailError: error.email })
    }
}

const blogs = async (req, res) => {
    const name = req.usr.name;
    const email = req.usr.email
    const id = req.usr._id;
    try {
        const blogs = await Blog.find().populate('author', 'firstName lastName');
        months = ['jan', 'fev', 'mar', 'apr', 'mai', 'jun', 'jull', 'Aout', 'sep', 'oct', 'nov', 'dec'];
        const myBlogs = []
        blogs.forEach((blog) => {
            const day = blog.createdAt.getDate();
            const month = months[blog.createdAt.getMonth()];
            const year = blog.createdAt.getFullYear();
            const name = blog.author.firstName + " " + blog.author.lastName;
            const content = blog.content;
            const image = blog.image;
            const date = `${day} ${month} ${year}`;
            myBlogs.push({ name, content, image, date });
        })
        res.render('blogs', { myBlogs, name, email, id})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createBlog = async (req, res) => {
    const { content } = req.body;
    const imageUrl = req.file ? req.file.path : '';
    const blog = new Blog({
        author: req.usr._id,
        content,
        image: imageUrl,
    });
    try {
        await blog.save();
        res.status(301).redirect('/blogs')
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const get_updateProfil = async (req, res) => {
    try {
        res.render('changeProfil');
    } catch (err) {
        errorHandler(err)
    }
}

const updateProfil = async (req, res) => {
    const { firstName, lastName } = req.body;
    try {
        const imageUrl = req.file ? req.file.path : '../images/2024110213043705.png'
        const updateUser = await User.findByIdAndUpdate({
            firstName,
            lastName,
            profil: imageUrl
        })
        await User.save()
        console.log(updateUser)
        res.redirect('/blogs');
    } catch (err) {
        errorHandler(err)
    }
}

module.exports = {
    logIn,
    signUp,
    blogs,
    signUp_post,
    logIn_post,
    createBlog,
    get_updateProfil,
    updateProfil
}