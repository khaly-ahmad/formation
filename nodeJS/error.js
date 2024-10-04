function errorFunction(req,res) {
    res.writeHead(404, { 'content-Type': 'text/html; charset = utf-8' });
    res.end('<h1> ERROR 404 url invalid </h1>')
}

module.exports = {
    errorFunction
}