/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/localstorage-slim/dist/localstorage-slim.js":
/*!******************************************************************!*\
  !*** ./node_modules/localstorage-slim/dist/localstorage-slim.js ***!
  \******************************************************************/
/***/ (function(module) {

eval("!function(t,e){ true?module.exports=e():0}(this,(function(){return(()=>{\"use strict\";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{default:()=>p});const r=(...t)=>{},n=t=>null!==t&&\"Object\"===t.constructor.name;let c;const o=()=>{if(void 0!==c)return c;c=!0;try{localStorage||(c=!1)}catch(t){c=!1}return i(),c},l=String.fromCharCode(0),a=(t,e,r=!0)=>r?[...JSON.stringify(t)].map((t=>String.fromCharCode(t.charCodeAt(0)+e))).join(\"\"):JSON.parse([...t].map((t=>String.fromCharCode(t.charCodeAt(0)-e))).join(\"\")),s={ttl:null,encrypt:!1,encrypter:a,decrypter:(t,e)=>a(t,e,!1),secret:75},i=(t=!1)=>{if(!o())return!1;Object.keys(localStorage).forEach((e=>{const r=localStorage.getItem(e);if(!r)return;let c;try{c=JSON.parse(r)}catch(t){return}n(c)&&l in c&&(Date.now()>c.ttl||t)&&localStorage.removeItem(e)}))},p={config:s,set:(t,e,n={})=>{if(!o())return!1;const c=Object.assign(Object.assign(Object.assign({},s),n),{encrypt:!1!==n.encrypt&&(n.encrypt||s.encrypt),ttl:null===n.ttl?null:n.ttl||s.ttl});try{let n=c.ttl&&c.ttl>0?{[l]:e,ttl:Date.now()+1e3*c.ttl}:e;c.encrypt&&(c.ttl&&l in n?n[l]=(c.encrypter||r)(n[l],c.secret):n=(c.encrypter||r)(n,c.secret)),localStorage.setItem(t,JSON.stringify(n))}catch(t){return!1}},get:(t,e={})=>{if(!o())return null;const c=localStorage.getItem(t);if(!c)return null;const a=Object.assign(Object.assign(Object.assign({},s),e),{encrypt:!1!==e.encrypt&&(e.encrypt||s.encrypt),ttl:null===e.ttl?null:e.ttl||s.ttl});let i=JSON.parse(c);const p=n(i)&&l in i;if(a.decrypt||a.encrypt)try{p?i[l]=(a.decrypter||r)(i[l],a.secret):i=(a.decrypter||r)(i,a.secret)}catch(t){}return p?Date.now()>i.ttl?(localStorage.removeItem(t),null):i[l]:i},flush:i,clear:()=>{if(!o())return!1;localStorage.clear()},remove:t=>{if(!o())return!1;localStorage.removeItem(t)}};return e.default})()}));\n//# sourceMappingURL=localstorage-slim.js.map\n\n//# sourceURL=webpack:///./node_modules/localstorage-slim/dist/localstorage-slim.js?");

/***/ }),

/***/ "./src/js/dragdrop.js":
/*!****************************!*\
  !*** ./src/js/dragdrop.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind\": () => (/* binding */ bind),\n/* harmony export */   \"setDraggable\": () => (/* binding */ setDraggable),\n/* harmony export */   \"bindDrop\": () => (/* binding */ bindDrop)\n/* harmony export */ });\nlet dragSrcEl = null;\n\nconst setDraggable = (element, draggable) => {\n    element.draggable = draggable;\n};\n\nconst bind = () => {\n    let items = document.querySelectorAll('[draggable]');\n    items.forEach(function (item) {\n        item.addEventListener('dragstart', handleDragStart, false);\n        item.addEventListener('dragend', dragend, false);\n    });\n}\n\nconst bindDrop = () => {\n    let items = document.querySelectorAll('.dropzone');\n    items.forEach(function (item) {\n        item.addEventListener('drop', handleDrop, false);\n        item.addEventListener('dragenter', handleDragEnter, false);\n        item.addEventListener('dragover', function (e) {\n            e.preventDefault();\n        }, false);\n    });\n}\n\nconst handleDrop = (e) =>{\n    e.preventDefault();\n    console.log(e, dragSrcEl);\n    let parent = e.target.parentNode;\n    if (dragSrcEl !== e.target) {\n        e.target.classList.add(dragSrcEl.classList[0]);\n        e.target.classList.remove('counter-white');\n    }\n\n        const event = new CustomEvent('row-update', { detail:{ row: parent.parentNode }});\n        event.initEvent('row-update', true, true);\n        parent.dispatchEvent(event);\n}\n\nconst handleDragEnter = (event) =>{\n    const target = event.target;\n    event.preventDefault();\n    if (target) {\n        // Set the dropEffect to move\n        event.dataTransfer.dropEffect = 'move';\n        const currentCounterClass = target.classList[0];\n        target.classList.add(currentCounterClass);\n    }\n}\n\nconst dragend = (e) => {\n    e.preventDefault();\n}\n\nconst handleDragStart = (e) => {\n    dragSrcEl = e.target;\n    e.dataTransfer.setData('text/html', e.target.innerHTML);\n    console.log(e, dragSrcEl);\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/dragdrop.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ \"./src/js/message.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/js/state.js\");\n/* harmony import */ var _dragdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dragdrop */ \"./src/js/dragdrop.js\");\n\n\n\n\n\nconst url = 'mastermind.codesho.ws/ws/';\nconst  board = document.getElementById('board');\n//saveState(board);\n//writeBoard(board);\n\n(0,_dragdrop__WEBPACK_IMPORTED_MODULE_2__.bind)();\n(0,_dragdrop__WEBPACK_IMPORTED_MODULE_2__.bindDrop)();\n(0,_message__WEBPACK_IMPORTED_MODULE_0__.bindCheck)(document.getElementById('btn'), _message__WEBPACK_IMPORTED_MODULE_0__.sendMessage);\n\n(0,_state__WEBPACK_IMPORTED_MODULE_1__.setCompleteListener)();\n\n(0,_message__WEBPACK_IMPORTED_MODULE_0__.init)(url, function (e) {\n    if( e.data === '__pong__' ) {\n       console.log('pong');\n       return;\n    }\n\n    const data = JSON.parse(e.data);\n    const disable = data.player !== undefined ? data.player : false;\n    (0,_state__WEBPACK_IMPORTED_MODULE_1__.checkWin)(data.correct) ? alert ('Winner !') : data.turn === 6 ? alert('bad luck !'): console.log('try again');\n    (0,_state__WEBPACK_IMPORTED_MODULE_1__.disablePlayer)(disable);\n    alert(data);\n    (0,_state__WEBPACK_IMPORTED_MODULE_1__.storeSequence)(board,data.sequence);\n    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setRowClasses)(board, data.turn, _dragdrop__WEBPACK_IMPORTED_MODULE_2__.bindDrop);\n    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setCounter)(board, data.guess, data.turn);\n    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setHint)(board, data.correct, data.turn);\n});\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/message.js":
/*!***************************!*\
  !*** ./src/js/message.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init),\n/* harmony export */   \"sendMessage\": () => (/* binding */ sendMessage),\n/* harmony export */   \"ws\": () => (/* binding */ ws),\n/* harmony export */   \"bindCheck\": () => (/* binding */ bindCheck)\n/* harmony export */ });\nlet ws;\n\nconst init =  (url, callback) => {\n    ws = new WebSocket('wss://' + url);\n    ws.onmessage = callback\n    ws.onopen = () => {\n        console.log('Connected to server');\n        setInterval(ping, 30000);\n    }\n    ws.onclose = () => {\n        console.log('Disconnected from server');\n        init(url, callback);\n\n    }\n    return undefined;\n}\n\nconst sendMessage = (message) => {\n    ws.send(message);\n}\n\nconst bindCheck = ( button, callback ) => {\n    button.addEventListener('click', function (e) {\n        if( e.target.dataset.guess !== undefined  && e.target.dataset.guess !== '' ) {\n            callback(e.target.dataset.guess);\n            e.target.dataset.guess = '';\n        }\n    });\n}\n\nconst ping = () => {\n    ws.send('__ping__');\n    console.log('ping');\n    let tm = setTimeout(function () {\n        /// ---connection closed ///\n    }, 5000);\n}\n\n\n\n//# sourceURL=webpack:///./src/js/message.js?");

/***/ }),

/***/ "./src/js/state.js":
/*!*************************!*\
  !*** ./src/js/state.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveState\": () => (/* binding */ saveState),\n/* harmony export */   \"writeBoard\": () => (/* binding */ writeBoard),\n/* harmony export */   \"setRowClasses\": () => (/* binding */ setRowClasses),\n/* harmony export */   \"setCompleteListener\": () => (/* binding */ setCompleteListener),\n/* harmony export */   \"removeRowClasses\": () => (/* binding */ removeRowClasses),\n/* harmony export */   \"setCounter\": () => (/* binding */ setCounter),\n/* harmony export */   \"setHint\": () => (/* binding */ setHint),\n/* harmony export */   \"checkWin\": () => (/* binding */ checkWin),\n/* harmony export */   \"disablePlayer\": () => (/* binding */ disablePlayer),\n/* harmony export */   \"storeSequence\": () => (/* binding */ storeSequence)\n/* harmony export */ });\n/* harmony import */ var localstorage_slim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! localstorage-slim */ \"./node_modules/localstorage-slim/dist/localstorage-slim.js\");\n/* harmony import */ var localstorage_slim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(localstorage_slim__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst saveState = (board) => {\n    let state = {};\n    for (let i = 0, row; row = board.rows[i]; i++) {\n        state[i] = row;\n        for (let j = 0, col; col = row.cells[j]; j++) {\n            state[i][j] = col.innerHTML;\n        }\n    }\n    localstorage_slim__WEBPACK_IMPORTED_MODULE_0___default().set('state', state);\n}\n\nconst readState = () => {\n    return localstorage_slim__WEBPACK_IMPORTED_MODULE_0___default().get('state');\n}\n\nconst setCounter = (board, guess, turn) => {\n    let index = 1;\n    console.log(board.rows[turn], guess, turn);\n    for (const counter in guess) {\n        board.rows[turn].cells[index].innerHTML = \"<span class=\\\"counter counter-\"+ guess[counter] + \"\\\">0</span>\"\n        index++;\n    }\n}\nconst disablePlayer = (player) => {\n  if(!player) {\n    document.querySelector('#btn').setAttribute('hidden', 'hidden');\n  }\n}\nconst setHint = ( board, current, turn ) => {\n    let classes = [];\n\n    current.forEach((item, index) => {\n        if (item === 0) {\n            classes.push('small-counter-white');\n        } else if (item === 1) {\n            classes.push('small-counter-black');\n        }\n    });\n    let index = 0\n    Array.from(board.rows[turn].cells[5].children).forEach((item) => {\n        if(classes.length > index) {\n            item.classList.add(classes[index]);\n        }\n        index ++;\n    });\n\n}\n\nconst checkWin = (current) => {\n   return 4 === current.reduce(function(previousValue, currentValue){\n        return currentValue + previousValue;\n    });\n\n}\nconst writeBoard = (board) => {\n    let state = readState()\n    for (const stateKey in state) {\n        if (state.hasOwnProperty(stateKey)) {\n            const row = board.rows[stateKey];\n            for (let j = 0, col; col = row.cells[j]; j++) {\n                col.innerHTML = state[stateKey][j];\n            }\n        }\n    }\n}\n\nconst setRowClasses = (board, turn, bindDrop) => {\n    console.log(board, turn);\n    for (let i = 0, row; row = board.rows[i]; i++) {\n        if (i === (turn + 1)) {\n            row.classList.add('turn');\n           let counters = document.querySelectorAll('.counter-white');\n           for (let j = 0, counter; counter = counters[j]; j++) {\n               console.log(counter);\n               if( counter.closest(\".turn\") === row) {\n                   counter.classList.add('dropzone');\n               }\n           }\n        }\n    }\n    bindDrop();\n}\n\n\nconst storeSequence = (board,sequence) => {\n    let index = 0;\n    board.querySelectorAll(\"th\").forEach((item) => {\n        item.dataset.sequence = sequence[index];\n        index++;\n    });\n}\n\nconst removeRowClasses = (board, turn) => {\n    for (let i = 0, row; row = board.rows[i]; i++) {\n        if (i === (turn + 1)) {\n            row.classList.remove('dropzone');\n        }\n    }\n}\n\nconst setCompleteListener = () => {\n    let board = document.getElementById('board');\n    board.addEventListener('row-update', (e) => {\n\n        if (e.detail.row) {\n            //check to see if the row is complete and if so, bind check\n            let found = {};\n            for (const children in e.detail.row.cells) {\n                if (e.detail.row.cells[children].innerHTML\n                    && e.detail.row.cells[children].innerHTML.match(/counter\\-[^white]/)) {\n                    found[children] = (e.detail.row.cells[children].innerHTML.match(/\\-([^white].*)\\\"/)[1])\n                }\n            }\n\n            if (Object.keys(found).length === 4) {\n                board.classList.add('complete');\n                document.getElementById('btn').setAttribute('data-guess', JSON.stringify(found));\n            }\n        }\n    });\n}\n\n\n//# sourceURL=webpack:///./src/js/state.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;