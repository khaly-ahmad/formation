const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index', { titre: 'hello everyone', message: 'this is my first programme in ejs' })
})

const port = 3000;
app.listen(port, () => {
    console.log(`le serveur est en ecoute sur le http://localhost:${port}`);
})