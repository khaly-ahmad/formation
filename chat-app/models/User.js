const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// userSchema.pre('save',async (next)=>{
//     if(user.isModified('password')){
//         user.password = await bcrypt.hash(user.password,10);
//     }
//     next();
// })

const User = mongoose.model('User',userSchema);

 module.exports= User;


// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true },
//     password: { type: String, required: true } // Mot de passe hashé
// });

// module.exports = mongoose.model('User', userSchema);