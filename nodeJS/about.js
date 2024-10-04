function aboutFunction(req,res){
    res.writeHead(200, { 'content-Type': 'text/html; charset = utf-8' });
    res.end('<h1> PAGE À PROPOS</h1>')
}
module.exports = {
    aboutFunction
}