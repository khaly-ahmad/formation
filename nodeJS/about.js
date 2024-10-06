function aboutFunction(req,res){
    const fs = require('fs')
    res.writeHead(200,{'content-type':'text/html'});
    fs.readFile('aboutPage.html' , 'utf-8' , (err,data)=>{
        if(err) throw err;
        res.end(data);
    })
}
module.exports = {
    aboutFunction
}