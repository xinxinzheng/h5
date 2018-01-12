onmessage = function(e){
    console.log(" worker1 recived data ss");
    var arr = [];
    for(var i = parseInt(e.data[0]) ; i  <= e.data[1] ; i++){
        console.log(i);
        arr.push(i);
    }
    postMessage(arr)
}