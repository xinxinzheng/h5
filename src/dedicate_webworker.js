onmessage = function(e) {
    // close();//为什么在这里讲worker关闭掉，消息仍然发送出去了
    var sub_work = new Worker('./sub_worker.js');
    console.log(sub_work);
    sub_work.postMessage(e.data);
    sub_work.onmessage = function(e){
        console.log(e.data);
        var sub_work1 = new Worker('./sub_worker1.js');
        sub_work1.postMessage(e.data);
        sub_work1.onmessage = function(e){
            postMessage(e.data);
        }
    }
    // close();
}