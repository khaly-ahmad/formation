const express = require('express');
const router = require('./routes/routes');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const path = require('path');


// connect to DB and express server
module.exports = mongoose.connect(process.env.URI)
    .then(app.listen(3000, () => {
        console.log('server listening on http://localhost:3000/api/login')
    })).catch((err) => {
        console.log(err);
    })

// view engine 
app.set('view engine', 'ejs');

// static file
app.use(express.static('public'));

//url encoded
app.use(express.urlencoded({ extended: true }))

// cookies parser
app.use(cookieParser());

// JSON parser
app.use(express.json());


// main route
app.use('/api', router);

//page not exist
app.use((req, res) => {
    res.status(404).send('page not found');
});