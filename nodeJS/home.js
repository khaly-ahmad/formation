function homeFunction(req, res) {
    const fs = require('fs');
    res.writeHead(200, { 'content-Type': 'text/html; charset = utf-8' });
    fs.readFile('homePage.html', 'utf-8', (err, data) => {
        if (err) throw err;
        res.end(data);
    })
}

module.exports = {
    homeFunction
}