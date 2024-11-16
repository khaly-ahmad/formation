const express = require('express');
const router = require('./routes/routes');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();


module.exports = mongoose.connect(process.env.URI)
    .then(app.listen(3000,()=>{
        console.log('server listening on http://localhost:3000')
    })).catch((err)=>{
        console.log(err);
    })

app.use(cookieParser())
app.use(express.json());
app.use('/api',router)

