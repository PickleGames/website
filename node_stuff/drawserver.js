var pickleDraw = function(io, server){
    // socket setup
    console.log("draw server start");
    io.on("connection", (socket)=>{
      console.log("socket connection " + socket.id);

      //handle draw event


    });
};

module.exports = pickleDraw;
