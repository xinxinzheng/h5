// import _ from 'lodash';

// if (module.hot) {
//     module.hot.accept('./print.js', function() {
//         console.log('Accepting the updated printMe module!');
//         printMe();
//     })
// }
function setEvent(note){
    note.onclick = function(evt){
        console.log('Notification click');
        note = new Notification('构造函数demo',{
            dir:'ltr',
            lang:'ZH-CN',
            icon:'./src/img/index.png',
            body:'这是一个通知！hahah',
            tag:'FirstNotification'
        });
        
    }
    note.onclose = function(evt){
        console.log('Notification close');
    }
    note.onerror = function(evt){
        console.log('Notification error');
    }
    note.onshow = function(evt){
        console.log('Notification show');
    }
}

function ShowNotification(){
    let note;
    if(!("Notification" in window)){
        alert('the browser dont support the Notification');
    }else if(Notification.permission === "granted"){
        note = new Notification('构造函数demo',{
            dir:'ltr',
            lang:'EN',
            icon:'./src/img/index.png',
            body:'这是一个通知！',
            tag:'FirstNotification'
        });
        setEvent(note);
    }else if(Notification.permission !== 'denied'){
        Notification.requestPermission(auth => {
            if(auth === "granted"){
                note = new Notification('构造函数demo',{
                    dir:'ltr',
                    lang:'EN',
                    icon:'../src/img/index.png',
                    body:'这是一个通知！',
                    tag:'FirstNotification',
                });
                setEvent(note);
            }
        })
    }
    
};

window.ShowNotification = ShowNotification;

let myWorker;
if(window.Worker){
    myWorker = new Worker('./src/dedicate_webworker.js');
}
let first = document.getElementById('num1');
let second = document.getElementById('num2');
let result = {};
first.onchange = function() {
    myWorker.postMessage([first.value,second.value]);
    console.log('Message posted to worker');
}
  
second.onchange = function() {
    myWorker.postMessage([first.value,second.value]);
    console.log('Message posted to worker');
}

myWorker.onmessage = function(e) {
    result.textContent = e.data;
    document.getElementById('result').innerHTML = result.textContent;
    console.log('Message received from worker');
    // myWorker.terminate();
  }
if(!window.sharedWorker){
    let sharedWorker = new SharedWorker('./src/shared_worker.js');
    window.sharedWorker = sharedWorker;
}

// sharedWorker.port.start();
let third = document.getElementById('num3');
let fouth = document.getElementById('num4');

third.onchange = function() {
    sharedWorker.port.postMessage([third.value,fouth.value]);
    console.log('Message posted to shared worker');
}
  
fouth.onchange = function() {
    sharedWorker.port.postMessage([third.value,fouth.value]);
    console.log('Message posted to shared worker');
}

sharedWorker.port.onmessage = function(e){
    console.log('recived back data',e.data);
    document.getElementById('result1').innerHTML = e.data;
}

function getData(){
    sharedWorker.port.postMessage('get');
}

