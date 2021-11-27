import {init, ws, bindCheck} from "./message";
const url = '127.0.0.1:8085';



init(url, function (e) {
    alert(e.data)
});

bindCheck(document.getElementById('btn'), {});


