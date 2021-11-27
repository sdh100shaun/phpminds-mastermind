const setDraggable = (element, draggable) => {
  element.draggable = draggable;
};

const bind = (handleDragStart, dragend) => {
    let items = document.querySelectorAll('[draggable]');
    items.forEach(function(item) {
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragend', dragend, false);
    });
}

const bindDrop = (item, handleDrop, handleDragEnter) => {
    console.log(item);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', function (e){ e.preventDefault();}, false);
}

export  { bind, setDraggable, bindDrop };