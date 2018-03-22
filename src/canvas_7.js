var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var linegra = context.createLinearGradient(0,0,canvas.width,canvas.height);
linegra.addColorStop(0,"lightblue");
linegra.addColorStop(0.25,"lightgreen");
linegra.addColorStop(0.5,"lightgray");
linegra.addColorStop(0.75,"lightyellow");
linegra.addColorStop(1,"red");
context.fillStyle = linegra;

context.fillRect(20,20,200,200);

var radiagra = context.createRadialGradient(canvas.width / 2 ,canvas.height,10,canvas.width / 2 ,0,100);
radiagra.addColorStop(0,'blue');
radiagra.addColorStop(0.25,'white');
radiagra.addColorStop(0.5,'purple');
radiagra.addColorStop(0.75,'red');
radiagra.addColorStop(1,'yellow');
context.fillStyle = radiagra;
context.fillRect(200,300,500,500);





