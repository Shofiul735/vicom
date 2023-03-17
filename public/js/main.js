const socket = io('/');

socket.on('connect',()=>{
    console.log('Successfully connect to web socket server!');
    console.log(socket);
})
