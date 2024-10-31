const jwt = require('jsonwebtoken');
require('dotenv').config();


const authenticateToken = (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        res.status(403).json({ message: 'accès refusé' });
    }

    jwt.verify(token, process.env.MON_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'token invalide' });
        // req.userId = decoded.userId;
        req.usr= decoded.usr;
        console.log(decoded.usr)
        next()
    })
}

module.exports = authenticateToken;
