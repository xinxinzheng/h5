var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.strokeStyle = "blue";
context.lineWidth = 2;
context.save();
function drawLinear(){
    context.beginPath();
    context.moveTo(100,50);
    context.lineTo(700,50);
    context.closePath();
    context.stroke();
    for(var i = 0 ; i < 50 ; i++){
        context.beginPath();
        context.moveTo(700, 50 + i * 10);
        if(i % 2 === 0){
            context.strokeStyle = 'rgba(0,0,0,0)';
            context.lineTo(700, 50 + (i + 1) * 10);
            context.closePath();
            context.stroke();
        }else{
            context.strokeStyle = "blue";
            context.lineTo(700, 50 + (i + 1) * 10);
            context.closePath();
            context.stroke();
        }
    }
    for(var j = 0 ; j < 60; j++){
        context.beginPath();
        context.moveTo(700 - j * 10, 550);
        if(j % 2 === 0){
            context.strokeStyle = 'rgba(0,0,0,0)';
            context.lineTo(700 - (j + 1) * 10,550);
            context.closePath();
            context.stroke();
        }else{
            context.strokeStyle = "blue";
            context.lineTo(700 - (j + 1) * 10,550);
            context.closePath();
            context.stroke();
        }      
    }
    for(var m = 0 ; m < 99; m++){
        context.beginPath();
        context.moveTo(100, 550 - m * 5);
        if(m % 2 === 0){
            context.strokeStyle = 'rgba(0,0,0,0)';
            context.lineTo(100, 550 - (m + 1) * 5);
            context.closePath();
            context.stroke();
        }else{
            context.strokeStyle = 'blue';
            context.lineTo(100, 550 - (m + 1) * 5);
            context.closePath();
            context.stroke();
        }
    }
    
}

drawLinear()