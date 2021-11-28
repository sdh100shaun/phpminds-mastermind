let ws;

const init =  (url, callback) => {
    ws = new WebSocket('ws://' + url);
    ws.onmessage = callback
    ws.onopen = () => {
        console.log('Connected to server');
        setInterval(ping, 30000);
    }
    return this;
}

const sendMessage = (message) => {
    ws.send(message);
}

const bindCheck = (button, data ) => {
    button.addEventListener('click', function () {
        sendMessage("{\"0\":\"red\", \"1\":\"green\", \"2\":\"purple\", \"3\":\"yellow\"}");
    });
}

const ping = () => {
    ws.send('__ping__');
    console.log('ping');
    let tm = setTimeout(function () {
        /// ---connection closed ///
    }, 5000);
}

export {init,sendMessage,ws, bindCheck};