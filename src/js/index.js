import {init, ws, bindCheck} from './message';
import { saveState } from './state';

const url = '127.0.0.1:8085';

saveState(document.getElementById('board'));

init(url, function (e) {
    alert(e.data)
});

bindCheck(document.getElementById('btn'), {});


