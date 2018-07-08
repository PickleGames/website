(function(){
  //make connection
  var $ = (id)=>{ return document.getElementById(id); };
  var socket = io.connect("http://localhost:8080" || "http://realpicklegames.com");
  window.onload = function(){
      var message = $("message"),
          handle = $("handle"),
          btn = $("send"),
          output = $("output"),
          feedback = $("feedback");
          //emit event
          btn.addEventListener("click", ()=>{
            socket.emit("chat",{
              message: message.value,
              handle: handle.value,
            });
            message.value = "";
          });

          message.addEventListener("keypress", ()=>{
            socket.emit("typing", handle.value);
          });

          //listen for event
          socket.on("chat", (data)=>{
            feedback.innerHTML = "";
            var text = document.createElement("p");
            var name = document.createElement("strong");
            name.innerHTML = data.handle;
            text.appendChild(name);
            text.innerHTML += ": " + data.message;
            output.appendChild(text);
          });

          socket.on("typing", (data)=>{
            feedback.innerHTML = "<p><em>" + data + "is typing a message...</em></p>";
          });

  };

})();
