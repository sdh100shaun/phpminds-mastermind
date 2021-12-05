import {init, bindCheck, sendMessage} from './message';
import {writeBoard, saveState, setCompleteListener, setRowClasses, checkWin, setCounter, setHint,disablePlayer,storeSequence} from './state';
import { bind, bindDrop } from './dragdrop';


const url = 'mastermind.codesho.ws/ws/';
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

    const data = JSON.parse(e.data);
    const disable = data.player !== undefined ? data.player : false;
    disablePlayer(disable);
    //alert(JSON.stringify(data));
    storeSequence(board,data.sequence);
    setRowClasses(board, data.turn, bindDrop);
    setCounter(board, data.guess, data.turn);
    setHint(board, data.correct, data.turn);
    checkWin(data.correct) ? alert ('Winner !') : data.turn === 6 ? alert('bad luck !'): console.log('try again');

});




