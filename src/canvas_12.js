var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.strokeStyle="lightblue";
context.lineWidth = 1;
context.moveTo(100,100);
context.lineTo(500,100);
context.stroke();


context.moveTo(100,200.5);
context.lineTo(500,200.5);
context.stroke();


context.lineWidth = .5;
context.moveTo(100,300.5);
context.lineTo(500,300.5);
context.stroke();