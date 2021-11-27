import {init, ws, bindCheck} from './message';
import {writeBoard, saveState} from './state';
import { bind, bindDrop } from './dragdrop';


const url = '127.0.0.1:8085';

saveState(document.getElementById('board'));
writeBoard(document.getElementById('board'));
let dragSrcEl = null;

bind( function handleDragStart(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.setData('text/html', this.innerHTML);
    console.log(e, dragSrcEl);
},function dragend(e) {
    e.preventDefault();
});

bindDrop(document.querySelector(".dropzone-1"), function handleDrop(e) {
    e.preventDefault();

    if (dragSrcEl !== this) {
        console.log(e, this, dragSrcEl);
        this.classList.add(dragSrcEl.classList[0]);
    }
    }, function onDragEnter(event) {
    const target = event.target;
    event.preventDefault();
    if (target) {
        console.log(event, target, dragSrcEl);
        // Set the dropEffect to move
        event.dataTransfer.dropEffect = 'move';
        target.classList.add('over');
        target.style.backgroundColor = '#f0f0f0';
    }
});


init(url, function (e) {
    alert(e.data)
});

bindCheck(document.getElementById('btn'), {});


