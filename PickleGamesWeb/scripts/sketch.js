// Client draw code
var canvas;

var $ = (id)=>{ return document.getElementById(id); };
var ip = window.location.hostname;
if(ip === "localhost") {
    ip = "localhost:8080";
}
// if(ip === "localhost") {
//     ip = "localhost:8080/pickledraw.html";
// } else {
//     ip = ip + "/pickledraw.html";
// }
var socket = io.connect(ip);

window.onload = function(){
    canvas.parent("draw-window");
};

var pointerSize = 5;
var colorValue = 255;
function setup() {
    canvas = createCanvas(800, 500);
    background(0);

}

function draw() {
    // stroke(255);
    // if (mouseIsPressed) {
    //     line(mouseX, mouseY, pmouseX, pmouseY);
    // }

}

function mousePressed(){
    drawLine(pointerSize, colorValue, mouseX, mouseY, pmouseX, pmouseY);
    sendDraw();
}

function mouseDragged(){
    drawLine(pointerSize, colorValue, mouseX, mouseY, pmouseX, pmouseY);
    sendDraw();
}

function drawLine(weight, color, x1, y1, x2, y2){
    strokeWeight(pointerSize);
    stroke(color);
    line(x1, y1, x2, y2);
}

// Send data

function sendDraw(){
    var data = {
        "weight" : pointerSize,
        "color" : colorValue,
        "x1" : mouseX,
        "y1" : mouseY,
        "x2" : pmouseX,
        "y2" : pmouseY,
    };
    socket.emit("draw", data);
    console.log("data sent: ");
    console.log(data);
}

// handle data
socket.on("draw", (data)=>{
    console.log("client data received: ");
    console.log(data);
    drawLine(data.weight, data.color,
             data.x1, data.y1,data.x2,data.y2);
});
