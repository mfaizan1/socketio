var socket =  io();
socket.on('connect',()=>{
    console.log("connected to server");
});
socket.on('disconnect',()=>{
    console.log("disconnected");
});
socket.emit('createMessage',{
    from:'andrew',
    message:'hey'
})
socket.on('newMessage',function(msg){
    console.log('new message' , msg);
});
