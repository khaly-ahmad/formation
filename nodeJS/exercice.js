const http = require("http");
const fs = require('fs');
const server = http.createServer((req,res)=>{
    if (req.url==='/' && req.method==="GET") {
        res.writeHead(200,{'content-Type':'text/html ; charset = utf-8 '});
        fs.readFile('formulaire.html','utf-8', (err,data)=>{
            if (err) throw err;
            res.end(data);
        })
    }else if(req.url==='/submit' && req.method ==='POST'){
        res.writeHead(200,{'content-type': 'text/html'});
        let body="";
        req.on('data', chunk => body += chunk.toString());
        req.on('end',()=>{
            const params = new URLSearchParams(body);
            const name = params.get('nom');
            res.end(`<h1>BIENVENUE Mr ${name.toUpperCase()}</h1>`)
        })
    }
    else if (req.url === '/homePage.html'){
        const home = require('./home');
        home.homeFunction(req,res);
    }
    else if (req.url === '/aboutPage.html'){
        const about = require('./about')
        about.aboutFunction(req,res);
    } else {
        const error = require('./error');
        error.errorFunction(req,res);
    }
})

server.listen(8080,()=>{
    console.log('http://localhost:8080/');
})