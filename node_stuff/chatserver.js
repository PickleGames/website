var socket = require("socket.io");
var picklechat = function(server){
    // socket setup
    var io = socket(server);
    console.log("chat server start");
    io.on("connection", (socket)=>{
      console.log("socket connection " + socket.id);

      //handle chat event
      socket.on("chat", (data)=>{
        io.sockets.emit("chat",data);
      });

      socket.on("typing", (data)=>{
        socket.broadcast.emit("typing", data);
      });

    });
};

module.exports = picklechat;
