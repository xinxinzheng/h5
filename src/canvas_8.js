var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');


var myImage = new Image();
myImage.src="src/img/redball.png";
myImage.onload = function(){
    var pattern = context.createPattern(myImage,'repeat-x');
    context.fillStyle = pattern;
    context.fillRect(0,0,300,100);

    pattern = context.createPattern(myImage,'repeat-y');
    context.fillStyle = pattern;
    context.fillRect(0,110,100,300);

    pattern = context.createPattern(myImage,'repeat');
    context.fillStyle = pattern;
    context.fillRect(350,10,100,300);

    pattern = context.createPattern(myImage,'no-repeat');
    context.fillStyle = pattern;
    context.fillRect(600,10,100,300);
}

