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

        const usr = { _id: `${user._id}`}
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
        const usr = { _id: `${newUser._id}`}
        const token = jwt.sign({ usr }, process.env.MON_SECRET, { expiresIn: '1h' })
        res.cookie('jwt', token, { httpOnly: true, })
        res.status(302).redirect(`/blogs`);
    } catch (err) {
        const error = errorHandler(err);
        res.status(500).render('signUp', { passwordError: error.password, emailError: error.email })
    }
}

const blogs = async (req, res) => {
    const id = req.usr._id;
    try {
        const user = await User.findById(id);
        const allUsers = await User.find().select('-_id -profil -email -password -__v');
        const name = `${user.firstName} ${user.lastName}`
        const email = `${user.email}`
        const myProfile = `${user.profil}`
        const blogs = await Blog.find().populate('author', 'firstName lastName profil');
        months = ['jan', 'fev', 'mar', 'apr', 'mai', 'jun', 'jull', 'Aout', 'sep', 'oct', 'nov', 'dec'];
        const myBlogs = []
        blogs.forEach((blog) => {
            const day = blog.createdAt.getDate();
            const month = months[blog.createdAt.getMonth()];
            const year = blog.createdAt.getFullYear();
            const name = blog.author.firstName + " " + blog.author.lastName;
            const profile = blog.author.profil;
            const content = blog.content;
            const image = blog.image;
            const date = `${day} ${month} ${year}`;
            const _id = blog._id;
            myBlogs.push({ _id, name, profile, content, image, date, comment: blog.comments });
        });
        res.render('blogs', { myBlogs , name, email, myProfile, allUsers });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createBlog_get = async (req, res) => {
    const userId = req.usr._id;
    try{
        const user = await User.findById(userId);
        const name = `${user.firstName} ${user.lastName}`;
        res.render('createBlog', {name, email: user.email});
    }catch(err){console.log(err)}
}

const createBlog = async (req, res) => {
    const { content } = req.body;
    const imageUrl = req.file ? req.file.path : '';
    try {
        const user = await User.findById(req.usr._id)
        const blog = new Blog({
            author: user._id,
            content,
            image: imageUrl,
        });
        await blog.save();
        res.status(302).redirect('/blogs')
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
const get_updateProfil = async (req, res) => {
    const profil = '../images/2024110213043705.png';
    try {
        res.render('changeProfil', { profil });
    } catch (err) {
        errorHandler(err)
    }
}


const updateProfil = async (req, res) => {
    try {
        const user = await User.findById(req.usr._id);
        const firstName = (req.body.firstName !== "") ? req.body.firstName : user.firstName;
        const lastName = (req.body.lastName !== "") ? req.body.lastName : user.lastName;
        const imageUrl = req.file ? req.file.path : '../images/2024110213043705.png';
        const update = {
            firstName,
            lastName,
            profil: imageUrl
        }
        await User.findByIdAndUpdate(req.usr._id, update, { new: true });
        res.redirect('/blogs');
    } catch (err) {
        errorHandler(err)
    }
}

const addComment = async (req,res)=>{
    const id = req.usr._id;
    const { blogId, comment} = req.body;
    try {
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({ error: 'user not found'})
        }
        const userName = `${user.firstName} ${user.lastName}`
        const blog = await Blog.findById(blogId);
        if(!blog) {
           return res.status(404).json({ message: 'blog introuvable'});
        } 
        blog.comments.push({ author: userName, content: comment});
        blog.save();
        res.redirect('/blogs')
    }catch(err){
        console.log(err);
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
    updateProfil,
    createBlog_get,
    addComment
} 