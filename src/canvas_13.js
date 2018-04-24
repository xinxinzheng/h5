var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var width = context.canvas.width;
var height = context.canvas.height;

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

function drawAxis(x,y){
    context.beginPath();
    context.strokeStyle = "darkblue";
    context.moveTo(x,y-500);
    context.lineTo(x,y);
    context.lineTo(x+500,y);
    context.stroke();
    for(var i = 1 ; i <= 100 ; i++){
        context.beginPath();
        if(i % 5 === 0){
            context.moveTo(x + i * 5, y-10);
            context.lineTo(x + i * 5, y+10);
        }else{
            context.moveTo(x + i * 5, y-5);
            context.lineTo(x + i * 5, y+5);
        }
        context.stroke();
    }
    for(var i = 1 ; i <= 100 ; i++){
        context.beginPath();
        if(i % 5 === 0){
            context.moveTo(x-10, y-i * 5);
            context.lineTo(x+10,  y-i * 5);
        }else{
            context.moveTo(x-5,  y-i * 5);
            context.lineTo(x+5, y-i * 5);
        }
        context.stroke();
    }
}

drawGrid(10);
drawAxis(100,700);