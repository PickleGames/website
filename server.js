var http = require('http');
var path = require('path');
var socket = require("socket.io");
var chatServer = require("./node_stuff/chatserver");
var drawServer = require("./node_stuff/drawserver");

var express = require('express');
var router = express();
var server = http.createServer(router);
var io = socket.listen(server);
// middleware static webpage
router.use(express.static(path.resolve(__dirname, 'PickleGamesWeb')));

server.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function(){
    console.log("server is now on");
});

// Start chat server
chatServer(io,server);
drawServer(io,server);
