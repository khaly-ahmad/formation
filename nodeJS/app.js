const fs = require('fs');
const path = require('path');
const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'content-Type': 'text/html; charset = utf-8' });
        fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    } else if (req.url === '/submit' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        })
        req.on('end', () => {
            const params = new URLSearchParams(body);
            const nom = params.get('name');
            res.writeHead(200, { 'content-Type': 'text/html; charset = utf-8' });
            res.end(`<h1> bonjour ${nom.toUpperCase()} </h1>`);
        });
    } else {
        res.writeHead(404,{'content-Type': 'text/html; charset = utf-8'});
        res.end('<h1> 404 - page non trouvée </h1>');
    }
});
server.listen(8000,()=>{
    console.log('le server est sur ecoute sur le http://localhost:8000');
})