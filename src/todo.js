const todoform = document.getElementById("todo_form");
const todolist = document.getElementById("todo_list");
const todoinput = todoform.querySelector("#todo_text");
let todos = [];
const TODOS_KEY = "todos";

function savetodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function todosubmit(e) {
    e.preventDefault();

    const newtodo = todoinput.value;
    const newtodoobj = { text: newtodo, id: Date.now() };
    todoinput.value = "";
    todos.push(newtodoobj);
    // todos.push({text:newtodo,id:Date.now()});
    painttodo(newtodoobj);
    savetodos();
}

function deletetodo(e) {
    // console.dir(e.target.parentElement);
    const li = e.target.parentElement;

    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id)); //todo = todos배열의 개별 아이템({text:~~~,id:~~~})
    savetodos();
}
function painttodo(newtodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.addEventListener("click", deletetodo);

    button.innerText = "❌";
    span.innerText = newtodo.text;
    li.id = newtodo.id; //li tag id 속성에 id값 지정
    li.appendChild(button);
    li.appendChild(span);
    todolist.appendChild(li);
}

todoform.addEventListener("submit", todosubmit);

const savedtodos = localStorage.getItem(TODOS_KEY);
//localstorage 에 저장된것을 불러옴.
if (savedtodos) {
    const parsedtodos = JSON.parse(savedtodos);
    todos = parsedtodos;
    parsedtodos.forEach(painttodo);
    // parsedtodos.forEach((item)=>console.log("this is turn of ",item));
}
