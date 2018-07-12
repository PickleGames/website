// Chat Server
var pickleChat = function(io,server){
    // socket setup
    console.log("chat server start");
    io.sockets.on("connection", (socket)=>{
      console.log("chat server, socket connection " + socket.id);

      //handle chat event
      socket.on("chat", (data)=>{
          io.sockets.emit("chat",data);
      });

      socket.on("typing", (data)=>{
          socket.broadcast.emit("typing", data);
      });

    });
};

module.exports = pickleChat;
