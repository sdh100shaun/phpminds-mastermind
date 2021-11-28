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

const readState = () => {
    return ls.get('state');
}

const writeBoard = (board) => {
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
        if (i === (turn + 2)) {
            row.classList.add('dropzone');
        }
    }
}

const setCompleteListener = () => {
    let board = document.getElementById('board');
    board.addEventListener('row-update', (e) => {

        if (e.detail.row) {
            //check to see if the row is complete and if so, bind check
            let found = {};
            for (const children in e.detail.row.cells) {
                if (e.detail.row.cells[children].innerHTML
                    && e.detail.row.cells[children].innerHTML.match(/counter\-[^white]/)) {
                    found[children] = (e.detail.row.cells[children].innerHTML.match(/\-([^white].*)\"/)[1])
                }
            }

            if (Object.keys(found).length === 4) {
                board.classList.add('complete');
                document.getElementById('btn').setAttribute('data-guess',JSON.stringify(found));
            }
        }
    });
}
export {saveState, writeBoard, setRowClasses, setCompleteListener}