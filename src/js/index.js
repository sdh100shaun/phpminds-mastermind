import {init, bindCheck, sendMessage} from './message';
import {writeBoard, saveState, setCompleteListener} from './state';
import { bind, bindDrop } from './dragdrop';


const url = '127.0.0.1:8085';
saveState(document.getElementById('board'));
writeBoard(document.getElementById('board'));

bind();
bindDrop();
bindCheck(document.getElementById('btn'), sendMessage);

setCompleteListener();

init(url, function (e) {
    if( e.data === '__pong__' ) {
       console.log('pong');
       return;
    }
    alert(e.data)
});




