let ws;

const init =  (url, callback) => {
    ws = new WebSocket('ws://' + url);
    ws.onmessage = callback
    ws.onopen = () => {
        console.log('Connected to server');
        setInterval(ping, 30000);
    }
    ws.onclose = () => {
        console.log('Disconnected from server');
        init(url, callback);

    }
    return this;
}

const sendMessage = (message) => {
    ws.send(message);
}

const bindCheck = ( button, callback ) => {
    button.addEventListener('click', function (e) {
        if( e.target.dataset.guess !== undefined  && e.target.dataset.guess !== '' ) {
            callback(e.target.dataset.guess);
            e.target.dataset.guess = '';
        }
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