var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var selectDiv = document.getElementById('selectDiv');
var x1 , y1 , x2 , y2 ;
var myImage = new Image();
myImage.src = "./src/img/arch.png";

function drawImage(){
    context.drawImage(myImage , 0 , 0 , 813 , 578 , 0 , 0 , 813 , 578);
};

function windowToCanvas(clientX,clientY){
    var box = canvas.getBoundingClientRect();
    return {
        x:( clientX - box.left ) * (canvas.width / box.width),
        y:( clientY - box.top ) * (canvas.height / box.height)
    };
}

myImage.onload = function(){
    drawImage();
}

function calculateRectAxis(){
    selectDiv.style.width = Math.abs(x1 - x2);
    selectDiv.style.height = Math.abs(y1 - y2);
    if(x2 - x1 <= 0 && y2 - y1 >= 0){
        selectDiv.style.left = x2;
        selectDiv.style.top = y1;
    }else if(y2 - y1 < 0 && x2 - x1 > 0 ){
        selectDiv.style.top = y2;
        selectDiv.style.left = x1;
    }else if(y2 - y1 < 0 && x2 - x1 < 0){
        selectDiv.style.top = y2;
        selectDiv.style.left = x2;
    }else{
        selectDiv.style.top = y1;
        selectDiv.style.left = x1;
    }
}

function selectImage(width,height,left,top){
    // context.clearRect(0,0,canvas.width,canvas.height);
    var axis = windowToCanvas(left,top);
    context.drawImage(canvas , axis.x , axis.y , width , height , 0 , 0 , canvas.width , canvas.height);
    // context.fill();
}

var selected = false;
canvas.addEventListener('mousedown',function(evt){
    selectDiv.style.display = 'block'
    selected = true;
    x1 = evt.clientX ; 
    y1 = evt.clientY ;
})

window.addEventListener('mousemove',function(evt){
    if(selected){
        x2 = evt.clientX ; 
        y2 = evt.clientY ;
        calculateRectAxis();
    }
})

window.addEventListener('mouseup',function(evt){
    selected = false;
    x2 = evt.clientX ; 
    y2 = evt.clientY ;
    calculateRectAxis();
    selectImage(Math.abs(x1 - x2),Math.abs(y1 - y2),parseInt(selectDiv.style.left),parseInt(selectDiv.style.top));
    selectDiv.style.display = 'none'
})