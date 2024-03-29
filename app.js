var app = require('./config/server');

const port = 5000;
var server = app.listen(port, function(){
    console.log(`Server running on http://localhost:${port} `);
});

var io = require('socket.io').listen(server)
app.set('io', io)

io.on('connection', (socket) =>{
    console.log('User connected')
    socket.on('disconnect', () => {
        console.log('User disconnected')
    })
    socket.on('sendMsg', (data) => {
        socket.emit('chatMsg', {name: data.name, msg: data.msg})
    })
    socket.broadcast.on('sendMsg', (data) => {
        socket.emit('chatMsg', {name: data.name, msg: data.msg})
    })
    
})