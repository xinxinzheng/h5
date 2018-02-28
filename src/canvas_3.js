var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var myImage = new Image();
myImage.src = "./src/img/running-sprite-sheet.png";

function drawImage(){
    context.drawImage(myImage, 0, 0, 462, 64, 0, 0, 462, 64);
}

function windowToCanvas(clientX,clientY){
    var box = canvas.getBoundingClientRect();
    return {
        x:( clientX - box.left ) * (canvas.width / box.width),
        y:( clientY - box.top ) * (canvas.height / box.height)
    };
}

function drawLine(axis){
    context.lineWidth = 0.5;
    context.strokeStyle = "lightblue";

    context.beginPath();
    context.moveTo(axis.x + 0.5,0);
    context.lineTo(axis.x + 0.5,canvas.height);
    context.stroke();

    context.beginPath();
    context.moveTo(0,axis.y + 0.5);
    context.lineTo(canvas.width,axis.y + 0.5);
    context.stroke();

    var w = context.measureText("(" + axis.x + " , " + axis.y + ")");
    context.fillText("(" + axis.x + " , " + axis.y + ")",(axis.x + 5) , axis.y - 10);
}

function drawXlines(num){
    context.lineWidth = 1;
    context.strokeStyle = "lightgray";
    var len = canvas.height / num;
    for(var i = 0 ; i < num ; i++){
        context.beginPath();
        context.moveTo(0,i * len + 0.5);
        context.lineTo(canvas.width,i*len + 0.5);
        context.stroke();
    }
}

myImage.onload = function(e) {
    drawImage();
};

function drawBackground(){
    context.clearRect(0,0,canvas.width,canvas.height);
}

canvas.addEventListener('mousemove',function(evt){
    drawBackground();
    drawXlines(20);
    drawImage();
    let axis = windowToCanvas(evt.clientX,evt.clientY);
    drawLine(axis);
})
