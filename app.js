const express = require('express');
const path = require('path');
const http = require('http');



const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server); // for socket.io

const PORT = process.env.PORT || 3000;

let socketids = [];

app.use(express.static(path.join(__dirname,'public')));

app.route('/')
    .get((req,res)=>{
        return res.sendFile('index.html')
    });


io.on('connection',(socket) => {
    socketids.push(socket.id);
    console.log('a use is connnected!');

    socket.on('disconnect',(socket)=>{
        console.log('user disconnected!');
        socketids = socketids.filter(item => item !== socket.id);
        console.log(socketids);
    })
})

server.listen(PORT,()=>{
    console.log(`Server up on port ${PORT}`);
})