const User = require('../models/user');
const bcrypt = require('bcrypt');


const logIn = (req, res) => {
    res.render('logIn')
}

const logIn_post = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).render('logIn',{passwordError:'email ou password incorrect'});
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).render('logIn',{passwordError:'email ou password incorrect'});
        }
        res.redirect('/blogs')
    } catch (e) { console.log(err) }
}

const signUp = (req, res) => {
    res.render('signUp');
}

const signUp_post = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).render('signUp', { passwordError: 'Mot de passe non identiques', emailError: null });
    }
    try {
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).render('signUp', { passwordError: null, emailError: 'utilisateur existe deja' });
        }
        const newUser = new User({ firstName, lastName, email, password })
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt)
        await newUser.save();
        res.render('blogs');
    } catch (err) {
        if (err.name === 'ValidationError') {
            const emailError = err.errors.email ? err.errors.email.message : null;
            return res.render('signUp', { passwordError: null, emailError })
        }
        res.status(500).render('signUp', { passwordError: 'erreur lors de inscription. Veuillez reéssayer', emailError: null })
    }
}

const blogs = (req, res) => {
    res.render('blogs')
}
const home = (req, res) => {
    res.render('home')
}

module.exports = {
    logIn,
    signUp,
    blogs,
    home,
    signUp_post,
    logIn_post
}