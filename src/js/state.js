import ls from 'localstorage-slim';

const saveState = (board) => {
    let state = {};
    for (let i = 0, row; row = board.rows[i]; i++) {
        state[i] = row;
        for (let j = 0, col; col = row.cells[j]; j++) {
            state[i][j] = col.innerHTML;
        }
    }
    ls.set('state', state);
}

export {saveState}