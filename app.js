var io = require('socket.io')(3000);

io.on('connection', (socket) => {
    console.log("novo usuario conectado");
    socket.on("client_mensage", (data)=>{
        io.sockets.emit("server_mensage", data);
    });
});
