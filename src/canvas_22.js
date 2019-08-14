var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.strokeStyle = "green";
context.lineWidth = 1;

var mousedown = false;

var startNode = {};
var endNode = {};
var controlNode = {};
var controlNode1 = {};
// context.beginPath();
// context.bezierCurveTo(10, 10, 80, 60, 50, 10);
// context.stroke();
// context.closePath();

// context.beginPath();
// context.moveTo(300,100);
// context.quadraticCurveTo(350,120, 400,110);
// context.stroke();
// context.closePath();

function drawCircle(node,color){
    context.save();
    context.strokeStyle = color;
    context.beginPath();
    context.arc(node.x,node.y,5,0,Math.PI * 2);
    context.stroke();
    context.restore()
}

function findNode(){
    var length = Math.pow((Math.pow((startNode.x - endNode.x),2) + Math.pow((startNode.y - endNode.y),2) / 2) , 0.5);
    var center = {};
    center.x = (startNode.x + endNode.x) / 2;
    center.y = (startNode.y + endNode.y) / 2;
    controlNode.x = 150
    controlNode.y = 150
    controlNode1.x = 100
    controlNode1.y = 100
}

canvas.onmousedown = function(evt){
    startNode.x = evt.clientX;
    startNode.y = evt.clientY;
    mousedown = true;
}

canvas.onmouseover = function(evt){
    if(mousedown){
        endNode.x = evt.clientX;
        endNode.y = evt.clientY;
        context.beginPath();
        context.moveTo(startNode.x, startNode.y);
        context.bezierCurveTo(controlNode.x, controlNode.y, controlNode1.x, controlNode1.y, endNode.x, endNode.y);
        context.closePath();
        context.stroke();
        drawCircle(controlNode, 'yellow');
        drawCircle(controlNode1, 'yellow');
        drawCircle(startNode, 'green');
        drawCircle(endNode, 'green');
    }
}

canvas.onmouseup = function(evt){
    if(mousedown){
        endNode.x = evt.clientX;
        endNode.y = evt.clientY;
        findNode();
        context.beginPath();
        context.moveTo(startNode.x, startNode.y);
        context.bezierCurveTo(controlNode.x, controlNode.y, controlNode1.x, controlNode1.y, endNode.x, endNode.y);
        context.closePath();
        context.stroke();
        drawCircle(controlNode, 'yellow');
        drawCircle(controlNode1, 'yellow');
        drawCircle(startNode, 'green');
        drawCircle(endNode, 'green');
    }
    mousedown = false;
}