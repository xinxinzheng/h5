var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
drawX(10);
drawY(10);
context.lineWidth = 3;
context.font = '40px Palatino ';
context.strokeStyle = "blue";
context.fillStyle = "red";

context.strokeText('stroke',10,40);
context.rect(10,100,100,80);
context.stroke();

context.beginPath();
context.arc(60,300,50,0,Math.PI * 1.5);
context.stroke();

context.beginPath();
context.arc(60,500,50,0,Math.PI * 1.5);
context.closePath();
context.stroke();

context.fillText('fill',310,40);
context.beginPath();
context.rect(310,100,100,80);
context.fill();

context.beginPath();
context.arc(360,300,50,0,Math.PI * 1.5);
context.fill();

context.beginPath();
context.arc(360,500,50,0,Math.PI * 1.5);
context.closePath();
context.fill();

context.lineWidth = 3;
context.beginPath();
context.strokeText('stroke & fill',610,40);
context.fillText('stroke & fill',610,40);
context.rect(610,100,100,80);
context.fill();
context.stroke();

context.beginPath();
context.arc(660,300,50,0,Math.PI * 1.5);
context.fill();
context.stroke();

context.beginPath();
context.arc(660,500,50,0,Math.PI * 1.5);
context.closePath();
context.fill();
context.stroke();

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
