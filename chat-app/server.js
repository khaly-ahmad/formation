const express = require('express');
const router = require('./routes/routes');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);
const io = new Server(server);

// app.set("socketio", io);

// // connect to DB and express server
// module.exports = mongoose.connect(process.env.URI)
//     .then(app.listen(3000, () => {
//         console.log('server listening on http://localhost:3000/api/login')
//     })).catch((err) => {
//         console.log(err);
//     })

// io.on("connection", (socket) => {
//     console.log("Un utilisateur s'est connecté.");

//     // Rejoindre une salle
//     socket.on("join", (userId) => {
//         console.log(`Utilisateur ${userId} rejoint sa salle.`);
//         socket.join(userId); // L'utilisateur rejoint une salle basée sur son userId
//     });

//     // Gestion de l'envoi de messages privés
//     socket.on("sendMessage", ({ senderId, receiverId, message }) => {
//         console.log(`Message de ${senderId} à ${receiverId}: ${message}`);
//         io.to(receiverId).emit("receiveMessage", { senderId, message }); // Envoie au destinataire
//     });
//     // Déconnexion
//     socket.on("disconnect", () => {
//         console.log("Un utilisateur s'est déconnecté.");
//     });
// });
// view engine 
app.set('view engine', 'ejs');

// static file
app.use(express.static('public'));

//url encoded
app.use(express.urlencoded({ extended: true }))

// cookies parser
app.use(cookieParser());

// JSON parser
app.use(express.json());


// main route
app.use('/api', router);

//page not exist
app.use((req, res) => {
    res.status(404).send('page not found');
});


