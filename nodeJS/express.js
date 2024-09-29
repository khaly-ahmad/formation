const express = require('express');
const path= require('path');
const app = express();

app.use(express.urlencoded({extend:true}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.post('/submit',(req,res)=>{
    const name = req.body.name;
    res.send(`<h1>Bonjour ${name}</h1>`);
});

const port = 3000;
app.listen(port,()=>{
    console.log(`le serveur est en ecoute sur le http://localhost:${port}`);
})