const textInputDOM = document.getElementById("todo_input");
const btnAddTodoDOM = document.getElementById("add_todo");
const todosDOM = document.querySelector("#todos");
const btnClearDOM = document.querySelector("#clear");



let textInputValue = "";
let todos = [];

textInputDOM.addEventListener("change", function (event) {
    textInputValue = event.target.value;

});

btnAddTodoDOM.addEventListener("click", addTodo);
btnClearDOM.addEventListener("click", clearTodos);

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
    if (todos.length === 0) {
        todosDOM.innerHTML = "liste boş !"
    } else {
        todos.forEach((item) => {
            result += ` 
            <li class="flex justify-between border px-4 py-3
           flex items-center justify-between">
                <span>${item.todoTitle}</span>
                <button class="text-red-400" onclick="deleteTodo( ${item.id})">Sil</button>
            </li>
            ${item.id}
            `;
        });
        todosDOM.innerHTML = result;

    };

};

function deleteTodo(id) {
    let deletedId;

    for (let index in todos) {
        if (todos[index].id == id) {
            deletedId = index;
        };
    };
    todos.splice(deletedId, 1);
    displayTodos();
}

function clearTodos() {
    todos.splice(0, todos.length);
    displayTodos();
}

displayTodos();