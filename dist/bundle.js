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
const todoArr = [];
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
close = document.querySelectorAll("#close")
  close.forEach(function(el){
  el.addEventListener("click",function(){
  document.querySelector(".modal").style.display = "none";
  document.querySelector(".modal-2").style.display = "none";
  document.querySelector("#page-mask").style.display = "none";
  });
});

//creates project and closes modal
document.querySelector("#project").addEventListener("submit", function(e){
  values = document.querySelector("#project")
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
let currentProject = "";
function todoList(){
listButton = document.querySelectorAll(".list-button")
listButton.forEach(function(e){
  e.addEventListener("click",function(d){
    document.querySelector("#page-mask").style.display = "inline";
    document.querySelector(".modal-2").style.display = "inline";
    document.querySelector(".modal-2-header").innerHTML = projectArr[e.dataset.name].title
    currentProject = e.dataset.name
    populateTodo(currentProject)
  })
})
}

const TodoChild = (dataset) => {
  const content = [];
  return {
   check,
   content,
   dataset
 }
};

//adds tasks
document.querySelector(".todo-form").addEventListener("submit",function(e){
  e.preventDefault()
  todo = document.querySelector(".todo-form")
  parentdiv = document.querySelector(".todo-list")
  div = document.createElement("div")
  div.classList = "todo-list-item"
  div.innerHTML = todo.elements["todo"].value
  newCheckBox = document.createElement('input');
  newCheckBox.type = 'checkbox';
  newCheckBox.classList = "checkbox"
  newCheckBox.dataset.name = todo.elements["todo"].value
  parentdiv.appendChild(newCheckBox)
  parentdiv.appendChild(div)
  const taskStorage = TodoChild(currentProject)
  taskStorage.content.push(todo.elements["todo"].value)
  todoArr.push(taskStorage)
  populateTodo(currentProject)
})

function populateTodo(currentProject){
  const OLD = document.querySelectorAll(".todo-list-item")
  OLD.forEach(function(element){
    element.remove();
  })
  const OLDCHECK = document.querySelectorAll(".checkbox")
  OLDCHECK.forEach(function(element){
    element.remove();
  })
  todoArr.forEach(function(el){
    if (el.dataset == currentProject){
      parentdiv = document.querySelector(".todo-list")
      div = document.createElement("div")
      div.classList = "todo-list-item"
      div.innerHTML = el.content
      newCheckBox = document.createElement('input');
      newCheckBox.type = 'checkbox';
      newCheckBox.classList = "checkbox"
      newCheckBox.dataset.name = el.content
      if (el.check == "checked"){
        newCheckBox.checked = true
      }
      parentdiv.appendChild(newCheckBox)
      parentdiv.appendChild(div)
    }
  })
  checkBox()
}

function checkBox(){
test = document.querySelectorAll(".checkbox")
test.forEach(function(e){
  e.addEventListener("click", function(){
    for(i=0;i < todoArr.length;i++){
      if(todoArr[i].content == e.dataset.name){
        if (todoArr[i].check != "checked"){
        todoArr[i].check = "checked";
        console.log(todoArr[i])
        break;
        }
        else{todoArr[i].check = "unchecked"
        console.log(todoArr[i])
        break;}
      }
    }
  })
})
}

/***/ })
/******/ ]);