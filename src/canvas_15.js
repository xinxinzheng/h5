var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var width = context.canvas.width;
var height = context.canvas.height;
var mousedown = false;
var x = 0;
var y = 0;
var color = document.getElementById('color');
context.lineWidth = 1;
context.strokeStyle = "lightblue";
function drawGrid(step){
    for(var i = 0 ; step * i < width ; i++){
        context.moveTo(step * i + 0.5 , 0)
        context.lineTo(step * i + 0.5,height);
    }

    for(var i = 0 ; step * i < height ; i++){
        context.moveTo(0 , i * step + 0.5)
        context.lineTo(width , i * step + 0.5);
    }
    context.stroke();
}

function changeColor(){
    context.strokeStyle = color.value;
}
canvas.onmousedown = function(evt){
    context.save();
    context.strokeStyle = color.value;
    mousedown = true;
    x = evt.offsetX;
    y = evt.offsetY;
}
canvas.onmousemove = function(evt){
    if(mousedown === true){
        context.beginPath();
        context.moveTo(x,y);
        context.lineTo(evt.offsetX,evt.offsetY);
        context.stroke();
    }
}
canvas.onmouseup = function(evt){
    mousedown = false;
    
}
drawGrid(10);