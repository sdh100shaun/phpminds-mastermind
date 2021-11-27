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
export {saveState, writeBoard}