var data = 0 ; 
onconnect = function(e) {
    var port = e.ports[0];
    port.onmessage = function(e) {
      if(e.data == "get"){
        console.log(data,'get');
        port.postMessage(data);
      }else{
        data = e.data[0] * e.data[1] * 10;
        var workerResult = 'Result: ' + data;
        port.postMessage(workerResult);
        console.log('post back data',data);
      }
    }
  }
