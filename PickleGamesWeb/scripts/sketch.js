var canvas;
(function(){
    var $ = (id)=>{ return document.getElementById(id); };
    var ip = window.location.hostname;
    if(ip === "localhost") {
        ip = "localhost:8080";
    }
    var socket = io.connect(ip);
    window.onload = function(){
        canvas.parent("draw-window");
    };

})();

var pointerSize = 5;
function setup() {
    canvas = createCanvas(640, 480);
    background(0);
}

function draw() {
    stroke(255);
    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }

}

// function mousePressed(){
//     fill(255);
//     line(mouseX, mouseY, pmouseX, pmouseY);
// }
//
// function mouseDragged(){
//     fill(255);
//     line(mouseX, mouseY, pmouseX, pmouseY);
// }
