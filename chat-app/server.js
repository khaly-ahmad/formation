require('dotenv').config();
const express = require('express');
const http = require('http');
const socket = require('socket.io');
const mongoose = require('mongoose');
const session = require('express-session');
const app = express();
const server = http.createServer(app);
const io = socket(server);
const User = require('./models/User');
const bcrypt = require('bcrypt');
const uri = process.env.URI;
const port = process.env.PORT || 8000;

//middlewares
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'mon-secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

//connect to mongoDB Atlas
mongoose.connect(uri)
    .then(server.listen(port, () => {
        console.log(`demarrage du serveur sur le port ${port}`);
    }))
    .catch(err => console.log(err));

//inscription route

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html');
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        let existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).send('user already exist');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await new User({ username, password: hashedPassword })
        await newUser.save();
        req.session.user=newUser;
        res.redirect('/chat');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur serveur');
    }
});

//chat route
app.get('/chat',(req,res)=>{
    if(req.session.user){
        res.sendFile(__dirname + '/public/chat.html')
    }else {
        res.redirect('/login')
    }
})

//connection route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).send('user not found');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('password incorrect');
        }
        req.session.userId = user._id;
        res.redirect('/chat');
    } catch (err) {
        console.error(err);
        res.status(500).send('server error');
    }
})

//display connection page 
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

//display chat page
app.get('/chat', (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }
    res.sendFile(__dirname + '/public/chat.html');
});

// desconnection route
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

io.on('connection', (socket) => {
    socket.on('chatMessage', (messageData) => {
        socket.broadcast.emit('message',{ message: messageData.message, sender: 'other'});
        socket.emit('message',{message: messageData.message, sender: 'self'});
    });
    socket.on('disconnect', () => {
        console.log('utilisateur connecté');
    });
});