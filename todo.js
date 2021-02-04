const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input"); 
const todoList = document.querySelector(".js-todoList");

const TODOS_LS = 'todos';

const todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(todos)); //JSON.stringify : js object를 string으로 바꿔준다 (b/c: )
}

function addTodo(text){
    const newId = todos.length + 1;

    /* HTML Level */
    const li = document.createElement("li");

    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    li.appendChild(delBtn);

    const span = document.createElement("span");
    span.innerText = text; 
    li.appendChild(span);

    li.id = newId;
    todoList.appendChild(li);

    /* Local Storage Level */
    const todoObj = {
        text: text,
        id: newId
    };
    todos.push(todoObj);
    saveTodos();
}

function handlerSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    addTodo(currentValue);
    todoInput.value = "";
}

function loadTodos(){
    const loadedTodos = localStorage.getItem(TODOS_LS);
    if (loadedTodos !== null){
        const parsedTodo = JSON.parse(loadedTodos); // js obj로 변환
        parsedTodo.forEach(function(todo){
            addTodo(todo.text);
        });
    }
}

function init(){
    loadTodos();
    todoForm.addEventListener("submit", handlerSubmit);
}

init();