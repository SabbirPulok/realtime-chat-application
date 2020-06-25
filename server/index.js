const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const socketio = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.port || 5000;

app.use(cors());
app.use(bodyParser.json());

// app.get('/',(req,res)=>{
//     res.send('Thank You!');
// })

// app.listen(4000,()=>console.log("Listening to port 4000"));
server.listen(PORT, ()=>console.log(`Server has started on port ${PORT}`));