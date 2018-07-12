// Draw Server
// var io_m = null;
var pickleDraw = function(io, server){
    // socket setup
    // io_m = null;
    console.log("draw server start");
    io.sockets.on("connection", (socket)=>{
        console.log("draw server, socket connection " + socket.id);
        //handle draw event
        socket.on("draw", (data)=>{
            console.log("data received: " + data);
            socket.broadcast.emit("draw", data);
        });

    });
};

// function connectSocket(socket) {
//     console.log("socket connection " + socket.id);
//     //handle draw event
//     socket.on("draw", handleDraw);
// }
//
// function handleDraw(data){
//     //console.log(data.color);
//     socket.broadcast.emit("draw", data);
// }

module.exports = pickleDraw;
