import ls from 'localstorage-slim';

const saveState = (board) => {
    let state = {};
    for (let i = 0, row; row = board.rows[i]; i++) {
        state[i] = row;
        for (let j = 0, col; col = row.cells[j]; j++) {
            state[i][j] = col.innerHTML.replace(/counter-white/g, 'counter-red');
        }
    }
    ls.set('state', state);
}

const readState = () => {
    return ls.get('state');
}

const writeBoard = ( board ) => {
    let state = readState()
    for (const stateKey in state) {
        if (state.hasOwnProperty(stateKey)) {
            const row = board.rows[stateKey];
            for (let j = 0, col; col = row.cells[j]; j++) {
                col.innerHTML = state[stateKey][j];
            }
        }
    }
}

const setRowClasses = (board, turn) => {
    for (let i = 0, row; row = board.rows[i]; i++) {
        if ( i === (turn + 2 )) {
        row.classList.add('dropzone');
        }
    }
}

const setCompleteListener = () => {
    let board = document.getElementById('board');
    board.addEventListener('row-complete', ( e) => {
        board.classList.add('complete');
        console.log(e.detail);
    });
}
export {saveState, writeBoard, setRowClasses, setCompleteListener}