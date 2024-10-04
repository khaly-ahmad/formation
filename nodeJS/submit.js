function submitFonction(req,res){
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    })
    req.on('end', () => {
        const params = new URLSearchParams(body);
        const nom = params.get('name');
        res.writeHead(200, { 'content-Type': 'text/html; charset = utf-8' });
        res.end(`<h1> BONJOUR ${nom.toUpperCase()} </h1>`);
    });
}

module.exports = {
    submitFonction
}