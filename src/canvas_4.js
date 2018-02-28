var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var circles = [];
context.lineWidth = 1;
context.strokeStyle = "lightgray";

function createCircles(num){
    circles = [];
    for(var i = 0 ; i < num ; i++){
        circles.push({
            x : 100,
            y : 100,
            radius : parseInt((Math.random() * 50).toFixed(2)) ,
            velocityX: 5 * Math.random(), 
            velocityY: 3 * Math.random(), 
            color:"rgba(" + 
            (Math.random() * 255).toFixed(0) + "," + 
            (Math.random() * 255).toFixed(0) + "," + 
            (Math.random() * 255).toFixed(0) + " ," +
            Math.random().toFixed(1) +")"
        });
    }
}

function drawCirle(){
    circles.map(function(obj){     
        context.beginPath();
        context.arc(obj.x,obj.y,obj.radius,0,Math.PI * 2 , true);
        context.fillStyle = obj.color;
        context.fill();
        justPosition(obj);
    })
}

function drawAxisY(){
    var width = 10 ; 
    var len = canvas.width / width;
    for(var i = 1 ; i < len ; i++){
        context.beginPath();
        context.moveTo(i * width + 0.5 , 0);
        context.lineTo(i * width + 0.5 , canvas.height);
        context.stroke();
    }
}

function drawAxisX(){
    var height = 10 ; 
    var len = canvas.height / height;
    for(var i = 1 ; i < len ; i++){
        context.beginPath();
        context.moveTo(0,height * i + 0.5);
        context.lineTo(canvas.width,height * i + 0.5);
        context.stroke();
    }
}


function justPosition(circle){
    if(circle.x + circle.velocityX + circle.radius > context.canvas.width || circle.x + circle.velocityX - circle.radius < 0 ){
        circle.velocityX = -circle.velocityX;
    }
    if(circle.y + circle.velocityY + circle.radius > context.canvas.height || circle.y + circle.velocityY - circle.radius  < 0){
        circle.velocityY= -circle.velocityY;
    }

    circle.x += circle.velocityX;
    circle.y += circle.velocityY;
    
}

drawAxisX();
drawAxisY();
createCircles(50);

var isStop = true;
var start = document.getElementById('start');
var interval = 0 ;
start.addEventListener('click',function(evt){
    evt.preventDefault();
    evt.stopPropagation();
    isStop = !isStop;
    isStop ? start.innerHTML = "Start": start.innerHTML = "Stop";
    interval && clearInterval(interval);
    interval = setInterval(function(){
        if(!isStop){
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            drawAxisX();
            drawAxisY();
            drawCirle();
        }            
    },1000/60)
    
})