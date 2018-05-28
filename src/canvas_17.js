var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
CanvasRenderingContext2D.prototype.lastMoveTo = {};
var moveToFunc = CanvasRenderingContext2D.prototype.moveTo;
CanvasRenderingContext2D.prototype.moveTo = function(x,y){
    moveToFunc.apply(context,[x,y]);
    CanvasRenderingContext2D.prototype.lastMoveTo = {x:x, y:y}
}

CanvasRenderingContext2D.prototype.dashLineTo = function(x1,y1,x2,y2,dashLength){
    var deltaX = x2 - x1;
    var deltaY = y2 - y1;
    var numDashes = Math.floor(Math.sqrt(deltaX * deltaX + deltaY * deltaY) / dashLength);
    for(var i = 0 ; i < numDashes ; i++){
        this[i % 2 === 0 ? 'moveTo' : 'lineTo'](x1 + deltaX / numDashes * i,y1 + deltaY / numDashes * i);
        context.stroke()
    }
}
context.styleStyle = 'blue'
context.lineWidth = 2;
context.dashLineTo(100,50,700,700,10);
context.dashLineTo(100,50,700,50,10);
context.dashLineTo(700,50,700,700,10);
context.dashLineTo(700,700,100,700,10);
context.dashLineTo(100,700,100,50,10);