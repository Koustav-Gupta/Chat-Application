const io = require('socket.io')(8000)

const users ={};

io.on('connection', socket =>{
    socket.on('new-user-joined', name =>{
        console.log("New user",name)
        users[socket.id] = name;
        socket.broadcast.emit()

    });

    socket.on('send',message =>{
        socket.brodcast.emit('receive',{message: message, name: users[socket.id]})
    });
})