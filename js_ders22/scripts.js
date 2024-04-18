const textInputDOM = document.getElementById("todo_input");
const btnAddTodoDOM = document.getElementById("add_todo");
const todosDOM = document.querySelector("#todos");


let textInputValue = "";
let todos = [];

textInputDOM.addEventListener("change", function (event) {
    textInputValue = event.target.value;

});

btnAddTodoDOM.addEventListener("click", addTodo);

function addTodo(e) {
    e.preventDefault();
    let todosLength = todos.length;
    todos.unshift({
        
        id: todosLength + 1,
        todoTitle: textInputValue
    });
    textInputDOM.value = "";
    displayTodos();


};

function displayTodos() {
    let result = "";

    todos.forEach((item) => {
        result += ` 
        <li class="flex justify-between border px-4 py-3
       flex items-center justify-between">
            <span>${item.todoTitle}</span>
            <button class="text-red-400">Sil</button>
        </li>
        ${item.id}
        `;
    });
    todosDOM.innerHTML = result;
    console.log(todos);

};