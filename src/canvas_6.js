var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.globalAlpha = 0.7;
context.strokeStyle = "hsl(240,70%,50%)";
context.lineWidth = 20;
context.lineJoin = "round";
context.strokeRect(20,20,100,100);

context.save();

context.fillStyle = "rgb(23,45,78)";
context.fillRect(140,140,100,100);

canvas.addEventListener('click',function(){
    context.clearRect(0,0,canvas.width,canvas.height);
})