var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function draw(x,y,w,h,radius){
    context.beginPath();
    context.moveTo(x,y + h - radius);
    context.lineTo(x,y + radius);
    context.arcTo(x, y, x + radius , y, radius);
    context.lineTo(x + w - radius,y);
    context.arcTo(x + w , y, x + w , y + radius, radius);
    context.lineTo(x + w,y + h - radius);
    context.arcTo(x + w , y + h, x + w - radius , y + h, radius);
    context.lineTo(x + radius,y + h);
    context.arcTo(x , y + h , x , y + h -radius , radius);
    context.closePath();
    context.stroke();
    context.fill();
}
context.lineWidth = 1;
context.strokeStyle = "blue";
context.fillStyle = "pink";
draw(50,50,100,100,10);
context.strokeStyle = "red";
context.fillStyle = "yellow";
draw(180,50,100,100,20);
context.strokeStyle = "green";
context.fillStyle = "gray";
draw(300,50,100,100,30);
context.strokeStyle = "purple";
context.fillStyle = "red";
draw(450,50,100,100,50);