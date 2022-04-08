const express = require('express')
const socket = require('socket.io')

const app = express();
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server is up and running on PORT ${PORT}`));

const io = socket(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    socket.emit('connection');
    console.log('New user connected');
})
