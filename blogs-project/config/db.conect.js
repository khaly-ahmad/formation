const mongoose = require('mongoose');
const express = require('express')
const app = express();
require('dotenv').config()
mongoose.connect(process.env.URI)
    .then(()=>{
        app.listen(3000,()=>{
            console.log('data base and server connected');
        });
    })
    .catch(err=>console.error(err))

module.exports = mongoose