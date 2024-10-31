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

        const usr = { name: `${newUser.lastName} ${newUser.lastName}`, email: `${newUser.email}` }
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
        const usr = { name: `${newUser.firstName} ${newUser.lastName}`, email: `${newUser.email}` }
        const token = jwt.sign({ usr  }, process.env.MON_SECRET, { expiresIn: '1h' })
        res.cookie('jwt', token, { httpOnly: true, })
        res.status(302).redirect(`/blogs?username=${newUser.firstName} ${newUser.lastName}&email=${newUser.email}`);
    } catch (err) {
        const error = errorHandler(err);
        res.status(500).render('signUp', { passwordError: error.password, emailError: error.email })
    }
}

const blogs = async (req, res) => {
    const name = req.usr.name;
    const email = req.usr.email
    try {
        const blogs = await Blog.find().populate('author', 'firstName lastName');
        months = ['jan', 'fev', 'mar', 'apr', 'mai', 'jun', 'jull', 'Aout', 'sep', 'oct', 'nov', 'dec'];
        const myBlogs = []
        blogs.forEach((blog) => {
            const day = blog.createAt.getDate();
            const month = months[blog.createAt.getMonth()];
            const year = blog.createAt.getFullYear();
            const name = blog.author.firstName + " " + blog.author.lastName;
            const content = blog.content;
            const image = blog.image;
            const date = `${day} ${month} ${year}`;
            myBlogs.push({ name, content, image, date });
        })
        res.render('blogs', { myBlogs, name, email })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createBlog = async (req, res) => {
    const { content } = req.body;
    const imageUrl = req.file ? req.file.path : '';
    const blog = new Blog({
        author: req.userId,
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

module.exports = {
    logIn,
    signUp,
    blogs,
    signUp_post,
    logIn_post,
    createBlog,
}