const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input"); 
const todoList = document.querySelector(".js-todoList");

const TODOS_LS = 'todos';

function display(text){
    const li = document.createElement("li");

    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    li.appendChild(delBtn);

    const span = document.createElement("span");
    span.innerText = text; 
    li.appendChild(span);

    todoList.appendChild(li);
}

function handlerSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    display(currentValue);
    todoInput.value = "";
}

function loadTodos(){
    const todos = localStorage.getItem(TODOS_LS);
    if (todos !== null){

    }
}

function init(){
    loadTodos();
    todoForm.addEventListener("submit", handlerSubmit);
}

init();