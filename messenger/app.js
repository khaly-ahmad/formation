const express = require('express');
const app = express()
const http = require('http');
const path = require('path');
const { disconnect } = require('process');
const { Server } = require('socket.io');
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname,'public')));

io.on('connection',(socket)=>{
    console.log('user connected')
    socket.on('message',(data)=>{
        io.emit('serverMessage',data);
    });
    socket.on('disconnect',()=>{
        console.log('user disconnected')
    })
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'chat.html'))
})

server.listen(3000,()=>{
    console.log('http://localhost:3000')
})