function errorFunction(req,res) {
    const fs = require('fs');
    res.writeHead(404,{'constent-Type':'text/html'});
    fs.readFile('errorPage.html', 'utf-8', (err,data)=>{
        if(err) throw err;
        res.end(data);
    })
}

module.exports = {
    errorFunction
}