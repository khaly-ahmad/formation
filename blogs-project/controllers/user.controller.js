const User = require('../models/user');
const bcrypt = require('bcrypt');
const errorHandler = require('../middlewares/errorHandlers');
const Blog = require('../models/blogs');

// const posts = [
//     {profil: `../images/biologie.jpg`,name: 'john cena', content: '', image:'../images/militaire.jpg'},
//     {profil: `../images/biologie.jpg`,name: 'john doe', content: 'bonjour la famille', image:'../images/biologie.jpg'},
//     {profil: `../images/biologie.jpg`,name: 'jane doe', content: 'salut tout le monde', image:'../images/militaire.jpg'},
//     {profil: `../images/biologie.jpg`,name: 'reddington', content: 'hello word', image:'../images/biologie.jpg'},
//     {profil: `../images/biologie.jpg`,name: 'raymond', content: 'hi my name is Raymond', image:'../images/biologie.jpg'},
//     {profil: `../images/biologie.jpg`,name: 'john cena', content: 'hello everybody', image:'../images/biologie.jpg'},
//     {profil: `../images/biologie.jpg`,name: 'michael', content: 'hello everyone', image:'../images/biologie.jpg'}
// ]
const logIn = (req, res) => {
    res.render('logIn',{ errors: null })
}

const logIn_post = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).render('logIn', { errors: 'email ou password incorrect' });
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).render('logIn', { errors: 'email ou password incorrect' });
        }
        res.redirect('/blogs')
    } catch (e) { console.log(err) }
}

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
        if (userExist) {
            emailError = 'utilisateur existe deja';
            return res.status(400).render('signUp', { passwordError, emailError });
        }
        const newUser = new User({ firstName, lastName, email, password })
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt)
        await newUser.save();
        res.render('blogs');
    } catch (err) {
        if (err.name === 'ValidationError') {
            const emailError = err.errors.email ? err.errors.email.message : null;
            return res.render('signUp', { passwordError, emailError })
        }
        res.status(500).send('erreur lors de inscription. Veuillez reéssayer')
    }
}

const blogs = async (req, res) => {
   try {
    const blogs = await Blog.find().sort({createAt:-1})
    res.render('blogs', { posts: blogs})
   }catch (error) {
    console.log(error);
   }
} 

const home = (req, res) => {
    res.render('home');
}

const createBlog = async (req, res) => {
    const { content } = req.body;
    const imageUrl = req.file.path;
    const blog = new Blog({
        content,
        image: imageUrl,
        author: null
    });
    try {
        await blog.save();
        posts.push(blog)
        res.redirect('/blogs');
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    logIn,
    signUp,
    blogs,
    home,
    signUp_post,
    logIn_post,
    createBlog
}