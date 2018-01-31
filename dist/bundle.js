/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const projectArr = [];
let projectCounter = 0;

const Newtodo = (title,date,priority) => {
  const dataset = projectCounter
  return {
   dataset,
   title,
   date,
   priority,
 }
};

function populateProjects(){
  div = document.createElement("div")
  div.classList = "eachproject"
  button = document.createElement("button")
  button.classList = "list-button"
  button.innerHTML = projectArr[projectArr.length - 1].title
  button.dataset.name = projectArr[projectArr.length - 1].dataset
  button.style.background = projectArr[projectArr.length - 1].priority
  span = document.createElement("span")
  span.innerHTML = projectArr[projectArr.length - 1].date
  span.style.float = "right"
  document.querySelector(".projects").appendChild(div).appendChild(button)
  document.querySelector(".projects").appendChild(div).appendChild(span)
}

//brings up new project modal
document.querySelector("#new-project").addEventListener("click",function(){
  document.querySelector(".modal").style.display = "inline";
  document.querySelector("#page-mask").style.display = "inline";
});

//close button inside modal
document.querySelector("#close").addEventListener("click",function(){
  document.querySelector(".modal").style.display = "none";
  document.querySelector("#page-mask").style.display = "none";
});

//creates project and closes modal
document.querySelector("form").addEventListener("submit", function(e){
  values = document.querySelector("form")
  document.querySelector(".modal").style.display = "none";
  document.querySelector("#page-mask").style.display = "none";
  e.preventDefault()
  const newProject = Newtodo(values.elements["title"].value,
   values.elements["date"].value,
   values.elements["priority"].value)
  projectArr.push(newProject)
  populateProjects()
  projectCounter += 1;
  todoList()
})

//opens todo list 
function todoList(){
listButton = document.querySelectorAll(".list-button")
listButton.forEach(function(e){
  e.addEventListener("click",function(d){
    document.querySelector("#page-mask").style.display = "inline";
    document.querySelector(".modal-2").style.display = "inline";
    findDataset(e.dataset.name)
  })
})
}

//finds the project object relevant to project clicked.
function findDataset(e){
  projectArr.forEach(function(obj){
    if(obj.dataset == e)
      console.log(obj)
  })
}

/***/ })
/******/ ]);