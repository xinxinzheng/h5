var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.strokeStyle = "hsla(240,70%,50%,.7)";
context.lineWidth = 20;
context.lineJoin = "round";
context.strokeRect(20,20,100,100);

context.save();

context.fillStyle = "rgba(23,45,78,.7)";
context.fillRect(140,140,100,100);

canvas.addEventListener('click',function(){
    context.clearRect(0,0,canvas.width,canvas.height);
})