var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var center = {};
var upnode = {};
var drawing = false;
var image; 
context.strokeStyle = 'blue';
context.fillStyle = "pink";
context.lineWidth = 0.5;
function getRadius(){
    var x = upnode.x - center.x;
    var y = upnode.y - center.y;
    var r = Math.floor(Math.sqrt(x * x + y * y));
    return r;
}

function drawCircle(){
    context.beginPath();
    var radius = getRadius();
    context.arc(center.x,center.y,radius,0,Math.PI * 2, true);
    context.stroke();
    context.fill();
    context.closePath();
}

canvas.addEventListener('mousedown',function(evt){
    drawing = true;
    center.x = evt.offsetX;
    center.y = evt.offsetY;
    image = context.getImageData(0,0,context.canvas.width,context.canvas.height);
})
canvas.addEventListener('mousemove',function(evt){
    if(drawing){
        upnode.x = evt.offsetX;
        upnode.y = evt.offsetY;
        context.putImageData(image,0,0);
        drawCircle();
        context.moveTo(evt.offsetX,0);
        context.lineTo(evt.offsetX,context.canvas.height);
        context.moveTo(0,evt.offsetY);
        context.lineTo(context.canvas.width,evt.offsetY);
        context.stroke();
    }
})
canvas.addEventListener('mouseup',function(evt){
    drawing = false;
    upnode.x = evt.offsetX;
    upnode.y = evt.offsetY;
    context.putImageData(image,0,0);
    drawCircle();
})