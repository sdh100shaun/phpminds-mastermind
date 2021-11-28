import {init, ws, bindCheck} from './message';
const url = '127.0.0.1:8085';
bindCheck(document.getElementById('btn'), {});


init(url, function (e) {
    if( e.data === '__pong__' ) {
       console.log('pong');
       return;
    }
    alert(e.data)
});




