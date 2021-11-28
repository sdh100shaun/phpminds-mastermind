let dragSrcEl = null;

const setDraggable = (element, draggable) => {
    element.draggable = draggable;
};

const bind = () => {
    let items = document.querySelectorAll('[draggable]');
    items.forEach(function (item) {
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragend', dragend, false);
    });
}

const bindDrop = () => {
    let items = document.querySelectorAll('.dropzone');
    items.forEach(function (item) {
        item.addEventListener('drop', handleDrop, false);
        item.addEventListener('dragenter', handleDragEnter, false);
        item.addEventListener('dragover', function (e) {
            e.preventDefault();
        }, false);
    });
}

const handleDrop = (e) =>{
    e.preventDefault();
    console.log(e, dragSrcEl);
    if (dragSrcEl !== e.target) {
        e.target.classList.add(dragSrcEl.classList[0]);
    }
    let parent = e.target.parentNode;
    if( parent.classList.contains('row-complete')){
        const event = new CustomEvent('row-complete', { detail:{ row: parent.parentNode }});
        event.initEvent('row-complete', true, true);
        parent.dispatchEvent(event);
    }
}

const handleDragEnter = (event) =>{
    const target = event.target;
    event.preventDefault();
    console.log(event, dragSrcEl, target);
    if (target) {
        // Set the dropEffect to move
        event.dataTransfer.dropEffect = 'move';
        const currentCounterClass = target.classList[0];
        target.classList.add(currentCounterClass);
    }
}

const dragend = (e) => {
    e.preventDefault();
}

const handleDragStart = (e) => {
    dragSrcEl = e.target;
    e.dataTransfer.setData('text/html', e.target.innerHTML);
    console.log(e, dragSrcEl);
}


export {bind, setDraggable, bindDrop};