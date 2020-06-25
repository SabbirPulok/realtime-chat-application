const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const socketio = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socketio(server);

const {addUser, removeUser, getUser, getUsersInRoom} = require('./users');

const PORT = process.env.port || 5000;
const router = require('./router');

app.use(cors());
app.use(bodyParser.json());
app.use(router);

io.on('connection',(socket)=>{

    socket.on('join', ({name,room},callback)=>{
        
        const {error,user} = addUser({id:socket.id,name,room})

        if(error)
        {
            return callback(error);
        }
        socket.emit('message',{user:'admin', text: `${user.name}, Welcome to the room ${user.room}`});
        socket.join(user.room);
    })

    socket.on('disconnect',()=>{
        console.log("User had left us.");
    })
})

server.listen(PORT, ()=>console.log(`Server has started on port ${PORT}`));