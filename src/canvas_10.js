var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function drawX(steps){
    context.strokeStyle = "lightblue";
    context.lineWidth = 1;
    for(var i = 0.5 ; i < canvas.height ; i += steps){
        context.beginPath();
        context.moveTo(0 , i + steps);
        context.lineTo(canvas.width , i + steps);
        context.closePath();
        context.stroke();
    }
}

function drawY(steps){
    context.strokeStyle = "lightblue";
    context.lineWidth = 0.5;
    for(var i = 0.5 ; i < canvas.width ; i += steps){
        context.beginPath();
        context.moveTo(i + steps , 0);
        context.lineTo(i + steps , canvas.height);
        context.closePath();
        context.stroke();
    }
}

drawX(10);
drawY(10);
context.lineWidth = 1;
context.strokeStyle = 'blue';
context.fillStyle = "rgba(172,192,236,.6)";
function drawTwoArc(){
    context.beginPath();
    context.arc(300,300,200,0,Math.PI * 2,true);
    context.arc(300,300,150,0,Math.PI * 2,false);
    context.fill();
    context.stroke();
}

context.shadowColor = 'rgba(0, 0, 0, 0.8)';
context.shadowOffsetX = 12;
context.shadowOffsetY = 12;
context.shadowBlur = 15;

drawTwoArc();