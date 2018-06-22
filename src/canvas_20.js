var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function DrawOuter(width,distance,color,fillColor){
    context.strokeStyle = color;
    context.fillStyle = fillColor;
    context.beginPath();
    context.arc(400,400,width,0,Math.PI * 2,true);
    context.arc(400,400,width - distance,0,Math.PI * 2,false);
    context.fill();
    context.stroke();
    context.closePath();
    context.beginPath();
    context.arc(400,400,width - distance * 2 ,0,Math.PI * 2,true); 
    context.stroke();
    DrawTick(width - distance * 2,width - distance,'rgba(0,0,255,.1)');
}

function drawCenter(){
    context.beginPath();
    context.arc(400,400,10,0,Math.PI * 2,true);
    context.fill();
    context.stroke();
}

function DrawTick(width,outerWidth,color){
    var degree = Math.PI * 2 , len = 120, reg = Math.PI * 2 / len;
    context.strokeStyle = color;
    for(var i = 0 ; i < len ; i++){
        context.beginPath();
        context.moveTo(400 + outerWidth * Math.cos(i * reg),400 - outerWidth * Math.sin(i * reg));
        if(i % 2 === 0){
            context.lineTo(400 + width * Math.cos(i * reg),400 - width * Math.sin(i * reg));
        }else{
            context.lineTo(400 + (width + 10) * Math.cos(i * reg),400 - (width + 10) * Math.sin(i * reg));
        }
        context.stroke();
        context.closePath();
    }
}

DrawOuter(250,20,'rgba(255,0,0,.2)','rgba(0,0,255,.2)');
drawCenter();
