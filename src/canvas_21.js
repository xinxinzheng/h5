var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.strokeStyle = "green";
context.lineWidth = 10;
context.beginPath();
context.bezierCurveTo(10, 10, 80, 60, 50, 10);
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(300,100);
context.quadraticCurveTo(350,120, 400,110);
context.stroke();
context.closePath();

