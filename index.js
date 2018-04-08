var express = require('express');
var socket = require('socket.io');
var app = express();

var server = app.listen( process.env.PORT || 4000,function(){
    console.log('serve in on');
});

app.use(express.static('public'));

var io = socket(server);

io.on('connection',function(socket){
    console.log('socket connection made',socket.id);
    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    });

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    });

});
