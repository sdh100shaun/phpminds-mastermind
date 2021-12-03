import {init, bindCheck, sendMessage} from './message';
import {writeBoard, saveState, setCompleteListener, setRowClasses, checkWin, setCounter, setHint} from './state';
import { bind, bindDrop } from './dragdrop';


const url = 'localhost:8085';
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
    checkWin(data.correct) ? alert ('You win!') : data.turn === 6 ? alert('You lose!'): console.log('try again');
   // alert(e.data)
    setRowClasses(board, data.turn, bindDrop);
    setCounter(board, data.guess, data.turn);
    setHint(board, data.correct, data.turn);
});




