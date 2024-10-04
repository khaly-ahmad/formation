const http = require('http');
const about=require('./about');
const error=require('./error');
const submit=require('./submit');
const fs = require('fs');
const path=require('path');
const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'content-Type': 'text/html; charset = utf-8' });
        fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    } else if (req.url==='/submit'&& req.method === 'POST') {
        submit.submitFonction(req,res);
    } else if (req.url === '/about') {
        about.aboutFunction(req,res);
    }else {
        error.errorFunction(req,res);
    }
})
server.listen(8000, () => {
    console.log("les serveur est sur ecoute sur le port: http://localhost:8000/");
})
