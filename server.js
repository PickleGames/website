var http = require('http');
var path = require('path');
var chatserver = require("./node_stuff/chatserver");

var express = require('express');
var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'PickleGamesWeb')));

server.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function(){
    console.log("server is now on");
});

chatserver(server);
