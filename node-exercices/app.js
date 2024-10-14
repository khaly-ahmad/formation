const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Item = require('./models/items');

//import .env
require('dotenv').config();
const URI=process.env.URI;

//connect to mongoDB
mongoose.connect(URI)
    .then((result)=>{app.listen(3001,()=>{
        console.log('http://localhost:3001');
    })})
    .catch(err=>console.log(err));


//view engine
app.set('view engine','ejs');
//express static
app.use(express.static('public'));
//url encoded
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    Item.find().sort({createdAt:-1})
        .then((result)=>{
            res.render('index', { items: result });
        })
})

app.post('/items',(req,res)=>{
    let item = new Item(req.body);
    item.save()
        .then(result=>{})
    res.redirect('/')
})

app.get('/:id',(req,res)=>{
    let id =req.params.id;
    Item.findById(id)
        .then((result)=>{res.render('item',{result})})
        .catch(err=>console.log(err));
})

app.use((req,res)=>{
    res.status(404).send('<h1>404</h1><p>this is the 404 page</p>');
});

