const jwt = require('jsonwebtoken');
require('dotenv').config();

const protectRoute = (req,res,next) => {
    const token = req.cookies.jwt;
    if(!token) {
        return res.status(403).json({error: "access refused"});
    }
    jwt.verify(token,process.env.SECRET_KEY, (err,decoded)=>{
        if (err) return res.status(403).json({ message: 'token invalide' });
        req.userId= decoded.userId;
        next()
    })
}
module.exports = protectRoute;

