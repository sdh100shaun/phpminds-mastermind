import { store } from "./storage.js";

const url = '127.0.0.1:8085';
let socket = new WebSocket('ws://' + url);

socket.onmessage = function (e) {
    alert(e.data)
}

const sendMessage = (message) => {
    socket.send(message);
}

document.getElementById('btn').addEventListener('click', function () {
    sendMessage("{\"0\":\"red\", \"1\":\"green\", \"2\":\"purple\", \"3\":\"yellow\"}");
});

init(socket);
