import {mastermind} from "./messages.js";

const url = '127.0.0.1:8085';
let socket = new WebSocket('ws://' + url);
let mm = mastermind().init(socket);
console.log(mm);

socket.onmessage = function (e) {
    alert(e.data)
}
