import {init, ws, bindCheck} from './message';
import {writeBoard, saveState} from './state';
import { bind, bindDrop } from './dragdrop';


const url = '127.0.0.1:8085';

saveState(document.getElementById('board'));
writeBoard(document.getElementById('board'));

bind();
bindDrop();


init(url, function (e) {
    alert(e.data)
});

bindCheck(document.getElementById('btn'), {});


