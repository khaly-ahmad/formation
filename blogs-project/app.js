const express = require('express');
const router = require('./routes/routes')
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.URI)
    .then(()=>{
        app.listen(3000,()=>{
            console.log('data base and server connected');
        });
    })
    .catch(err=>console.log(err));

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));
app.use(express.json());
app.use(router)

app.use((req,res)=>{
    res.status(404).send('not found')
})