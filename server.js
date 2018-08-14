const koa = require('koa');
const http = require('http');
const socketio = require('socket.io');
const PORT = process.env.PORT || 8000;
const serve  =  require('koa-static');



const app = new koa();
app.use(serve('public'));
const server = http.createServer(app.callback());
const io = socketio(server);

io.on('connection',(socket)=>{
    console.log("new user connected");
    socket.on('disconnect',()=>{
        console.log("disconnected");
    });

    socket.on('createMessage',(msg)=>{
        console.log('create message ' , msg);
        io.emit('newMessage',{
            from : msg.from,
            text : msg.message,
            createdAt: new Date().getTime()
        })
    });

});
server.listen(3000,function(){
    console.log("fuck you");
});
