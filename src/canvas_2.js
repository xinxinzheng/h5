var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var Radius = 100 , Margin = 35 , fontHeight = 15 , handTurnaction = canvas.width / 24 , hourHandTurnAction = canvas.width / 10 , numberSpace = 20;
var radius = canvas.height / 2 - Margin ,  shortRadius = radius - 5 , handRadius = radius + numberSpace;

function drawBackground(canvas,context){
    context.fillStyle = "lightblue";
    context.rect(0,0,canvas.width,canvas.height);
    context.fill();
}

function drawCirle(canvas,context){
    context.strokeStyle = "#666666";
    context.beginPath();
    context.arc(canvas.width / 2 ,canvas.height / 2 , radius , 0 , Math.PI * 2 , true);
    context.stroke();
}

function drawInnerCircle(canvas,context){
    context.fillStyle = "gray";
    context.beginPath();
    context.arc(canvas.width / 2 ,canvas.height / 2 , 5 , 0 , Math.PI * 2 , true);
    context.fill();
}

function drawNumbers(canvas,context){
    var time = [1,2,3,4,5,6,7,8,9,10,11,12];
    var arc = Math.PI / 6 ;
    time.forEach(function(number){
        var angle = ( number - 3 ) * arc;
        var textMetrics = context.measureText(number);
        x = canvas.width / 2 + Math.cos(angle) * handRadius - textMetrics.width / 2 ;  
        y = canvas.height / 2 + Math.sin(angle) * handRadius + fontHeight / 3 ;  
        context.fillText(number , x , y)
    })
}

function drawHand(canvas,context,loc,isHour){
    var angle = Math.PI * 2 * ( loc / 60 ) - Math.PI / 2 ,
    handRadius = isHour ? radius - hourHandTurnAction - handTurnaction : radius - handTurnaction;
    context.beginPath();
    context.moveTo(canvas.width / 2 ,canvas.height / 2);
    context.lineTo(canvas.width / 2 + Math.cos(angle) * handRadius,canvas.height / 2 + Math.sin(angle) * handRadius);
    context.stroke();
}       

function drawHands(canvas,context){
    var date = new Date();
    var hour = date.getHours();
    hour = hour > 12 ? hour - 12 : hour;
    drawHand(canvas,context,hour * 5 + ( date.getMinutes() / 60 ) * 5 , true);
    drawHand(canvas,context,date.getMinutes() , false);
    drawHand(canvas,context,date.getSeconds() , false);
}

function drawShotHands(canvas,context){
    for(var i = 1 ; i < 61 ; i++){
        var angle = Math.PI / 30 * i;
        if(i % 5 == 0){
            var short_radius = shortRadius - 5;
        }else{
            var short_radius = shortRadius;
        }
        context.beginPath();
        context.moveTo(canvas.width / 2 + Math.cos(angle) * radius,canvas.height / 2 + Math.sin(angle) * radius);
        context.lineTo(canvas.width / 2 + Math.cos(angle) * short_radius,canvas.height / 2 + Math.sin(angle) * short_radius);
        context.stroke();
    }
}

function drawClock(canvas,context){
    context.clearRect(0,0,canvas.width,canvas.height);
    drawBackground(canvas,context);
    drawCirle(canvas,context);
    drawShotHands(canvas,context);
    drawInnerCircle(canvas,context);
    drawNumbers(canvas,context);
    drawHands(canvas,context);
}
// drawBackground(canvas,context);

context.font = fontHeight + 'px Arial';
setInterval(function(){
    drawClock(canvas,context);
},1000)
