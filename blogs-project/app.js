require('dotenv').config();
const express = require('express');
const router = require('./routes/routes')
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');
const cookieParser = require('cookie-parser');

//view engine
app.set('view engine', 'ejs');
 
//parser les url
app.use(express.urlencoded({ extended: true }));

//rendre le public le dossier
app.use(express.static('public'));

app.use(cookieParser())
app.use(express.json());

//middleware des routes
app.use(router);

//connexion du DB
mongoose.connect(process.env.URI)
    .then(() => {
        app.listen(3000, () => {
            console.log('data base and server connected');
        });
    })
    .catch(err => console.log(err));

// app.use(errorHandler); 


app.use((req, res) => {
    res.status(404).send('not found')
})