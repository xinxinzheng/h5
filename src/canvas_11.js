var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.fillStyle="goldenrod";
context.strokeStyle = 'gray';
context.shadowColor ="rgba(200, 200, 0, 0.5)";
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 10;
context.beginPath();

context.moveTo(300,100);
context.lineTo(800,100);
context.lineTo(800,600);
context.lineTo(300,600);
context.closePath();
context.stroke();

context.moveTo(650,500)
context.arc(600,500,50,0,Math.PI * 2,true);
context.stroke();


context.moveTo(400,150);
context.lineTo(400,300);
context.lineTo(700,150);
context.closePath();
context.stroke();


context.moveTo(400,350);
context.lineTo(400,450);
context.lineTo(500,450);
context.lineTo(500,350);
context.closePath();
context.stroke();


context.fill();