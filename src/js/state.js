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

const setCounter = (board, guess, turn) => {
    let index = 1;
    console.log(board.rows[turn], guess, turn);
    for (const counter in guess) {
        board.rows[turn].cells[index].innerHTML = "<span class=\"counter counter-"+ guess[counter] + "\">0</span>"
        index++;
    }
}
const disablePlayer = (player) => {
  if(!player) {
    document.querySelector('#btn').setAttribute('hidden', 'hidden');
  }
}
const setHint = ( board, current, turn ) => {
    let classes = [];

    current.forEach((item, index) => {
        if (item === 0) {
            classes.push('small-counter-white');
        } else if (item === 1) {
            classes.push('small-counter-black');
        }
    });
    let index = 0
    Array.from(board.rows[turn].cells[5].children).forEach((item) => {
        if(classes.length > index) {
            item.classList.add(classes[index]);
        }
        index ++;
    });

}

const checkWin = (current) => {
   return 4 === current.reduce(function(previousValue, currentValue){
        return currentValue + previousValue;
    });

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

const setRowClasses = (board, turn, bindDrop) => {
    console.log(board, turn);
    for (let i = 0, row; row = board.rows[i]; i++) {
        if (i === (turn + 1)) {
            row.classList.add('turn');
           let counters = document.querySelectorAll('.counter-white');
           for (let j = 0, counter; counter = counters[j]; j++) {
               console.log(counter);
               if( counter.closest(".turn") === row) {
                   counter.classList.add('dropzone');
               }
           }
        }
    }
    bindDrop();
}





const removeRowClasses = (board, turn) => {
    for (let i = 0, row; row = board.rows[i]; i++) {
        if (i === (turn + 1)) {
            row.classList.remove('dropzone');
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
                document.getElementById('btn').setAttribute('data-guess', JSON.stringify(found));
            }
        }
    });
}
export {saveState, writeBoard, setRowClasses, setCompleteListener, removeRowClasses, setCounter, setHint, checkWin,disablePlayer};