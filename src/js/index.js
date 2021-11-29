import {init, bindCheck, sendMessage} from './message';
import {writeBoard, saveState, setCompleteListener, setRowClasses, removeRowClasses, setCounter} from './state';
import { bind, bindDrop } from './dragdrop';


const url = '127.0.0.1:8085';
const  board = document.getElementById('board');
//saveState(board);
//writeBoard(board);

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
    setRowClasses(board, JSON.parse(e.data).turn)
    setCounter(board, JSON.parse(e.data).guess, JSON.parse(e.data).turn)
});




