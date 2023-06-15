const todos = document.getElementById("todos");
const STORAGE_KEY = "TODO";
const todoDatas = [];

// Function for generating todo object
function generateTodo(value){
    return {
        id: +new Date(),
        value: value
    }
}

// Function for adding todo to session storage
function addTodo(){
    // Todo Value
    const todoValue = document.getElementById("todo").value

    // Generated Todo
    const generatedTodo = generateTodo(todoValue);

    // Pushing Todo Data
    todoDatas.push(generatedTodo);

    // Saving Todo Data
    saveData();
}

// Function for making todo element
function makeTodoElement(data){ 
    // Generate Todo
    const todoList = document.createElement("li");
    todoList.textContent = data.value;

    // Generate Todo Container
    const div = document.createElement("div");
    div.setAttribute("class", "todo-style");

    // Generate Todo Delete Button
    const deleteTodo = document.createElement("button");
    deleteTodo.textContent = "Hapus Bro";
    deleteTodo.addEventListener("click", ()=> {
        const confirmDelete = confirm("Are you sure?");
        if(confirmDelete){
            // const target = document.getElementById(div.id);
            // target.remove();  
            sessionStorage.removeItem(todoKey);
        } else{
            
        }
       }); 

    div.appendChild(todoList);
    div.appendChild(deleteTodo);
    todos.appendChild(div);
    }

function loadData(){
    const datas = sessionStorage.getItem(STORAGE_KEY);
    const stringifyDatas = JSON.parse(datas);
    for (const data of stringifyDatas) {
        makeTodoElement(data);
    }
}


function saveData(){
    const parsed = JSON.stringify(todoDatas);
    sessionStorage.setItem(STORAGE_KEY, parsed);
}

const add = document.getElementById("add");
add.addEventListener("click", function(event){
    event.preventDefault();
    addTodo();
});

const deleteAll = document.getElementById("deleteAll");
deleteAll.addEventListener("click", ()=>{
    sessionStorage.clear();
});


loadData();

// If you wanna use localStorage, just change the sessionStorage with localStorage, it would be the same way to implement it