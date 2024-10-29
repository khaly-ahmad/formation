require('dotenv').config();
const express = require('express');
const router = require('./routes/routes')
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');

//view engine
app.set('view engine', 'ejs');

app.get('/home',(req,res)=>{
    res.render('home', { name : 'khaly ahmad 2024 '})
})

//connexion du DB
mongoose.connect(process.env.URI)
    .then(() => {
        app.listen(3000, () => {
            console.log('data base and server connected');
        });
    })
    .catch(err => console.log(err));

// app.use(errorHandler); 

//parser les url
app.use(express.urlencoded({ extended: true }));

//rendre le public le dossier
app.use(express.static('public'));

//format JSON
app.use(express.json());

//middleware des routes
app.use(router);

app.use((req, res) => {
    res.status(404).send('not found')
})