onmessage = function(e){
    console.log(" worker2 recived data");
    var sum = 0;
    e.data.map(function(num){
        sum += parseInt(num);
    })
    postMessage(sum)
}