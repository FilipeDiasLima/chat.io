const { createServer } = require('http');
const { Server } = require('socket.io');
const { addUser, getUser, getUsersInRoom, removeUser } = require('./src/utils/users');

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
  }
});

io.on("connection", (socket) => {
  console.log("New connection with socket.io", socket.id);

  socket.on('join', ({ name, room }, cb) => {
    const { error, user } = addUser({ id: socket.id, name, room })

    if (error) return cb(error)

    socket.emit('message', { user: 'bot', text: `${user.name}, welcome to the room ${user.room}` });
    socket.broadcast.to(user.room).emit('message', { user: 'bot', text: `${user.name} has joined!` });

    socket.join(user.room);

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })

    cb();
  })

  socket.on("sendMessage", (message, cb) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });
    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    cb();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', { user: 'bot', text: `${user.name} has left.` })
    }

  })
});

httpServer.listen(3333, () => {
  console.log("Server socket.io started on port 3333");
});
