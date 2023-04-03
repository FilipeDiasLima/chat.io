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

  socket.on('join', (room) => {
    socket.join(room);
    console.log(`User with ID: ${socket.id} joined room: ${room}`);
  })

  socket.on("sendMessage", (data) => {
    console.log("🚀 ~ file: server.js:21 ~ socket.on ~ data:", data)
    socket.to(data.room).emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log("User Disconnected", socket.id);
  })
});

httpServer.listen(3333, () => {
  console.log("Server socket.io started on port 3333");
});
