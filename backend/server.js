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

let peers = [];
const broadcastEventTypes = {
    ACTIVE_USERS: 'ACTIVE_USERS',
    GROUP_CALL_ROOMS: 'GROUP_CALL_ROOMS'
}

io.on('connection', (socket) => {
    socket.emit('connection');
    console.log('New user connected');

    socket.on('new-user', function ({username, socketId}) {
        peers.push({
            username,
            socketId
        })
        console.log({peers})

        io.sockets.emit('broadcast', {
            event: broadcastEventTypes.ACTIVE_USERS,
            activeUsers: peers
        });
    })
})
