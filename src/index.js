import _ from 'lodash';

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
            icon:'./img/index.png',
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
            icon:'./img/index.png',
            body:'<a href="http://blog.csdn.net/educast/article/details/69941881">这是一个通知！</a>',
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
