let todos;

//getting data from localstorage
const savedTodos = JSON.parse(localStorage.getItem('todos'));
if(Array.isArray(savedTodos) || savedTodos.length < 0) {
    todos = savedTodos;
} else {

    todos = [{
        title:"go  for walk",
        dueDate:"2022-06-22",
        id: "id1"
      },
      {
          title:"go swimming",
          dueDate:"2022-06-23",
          id: "id2"
        
        },
        {
          title:"go shopping",
          dueDate:"2022-06-21",
          id: "id3"
        
        }]
      
}

//MVC pattern of development
// M - data (Model)
// V - view
// C - controller

//Model

function createTodo(title, dueDate) {
    let id = "" + new Date().getTime();
    console.log(title, dueDate, id)
    todos.push({title, dueDate, id})
    console.log(todos)
    saveTodos()
}

function removeTodo(idToDelete){
    todos = todos.filter((todo)=>{
        if(todo.id === idToDelete) {
            return false;
        } else {
            return true;
        }
    }) 

    saveTodos()
}


 //local storage

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos))
 }

 

 // controller

  function addTodo(){
    console.log("submit")
    let title = document.getElementById("title").value;
    let dueDate = document.getElementById("todo-date").value;
    console.log(title, dueDate)
    createTodo(title, dueDate);
     render();
  }


function deleteTodo(e){
const idToDelete = e.target.id;
removeTodo(idToDelete)

render();
  }

  
  //view

function render(){
    document.getElementById("display").innerHTML = "";
    todos.map((todo)=>{
       let element = document.createElement("div");
       element.innerText = todo.title +  " " + todo.dueDate;
    element.style = "margin: 6px"
       const deleteButton = document.createElement("button");

       deleteButton.innerText = "Delete";
       deleteButton.style = "margin-left: 24px";
        deleteButton.onclick = deleteTodo;
        deleteButton.id = todo.id;
       element.append(deleteButton)

      document.getElementById("title").value = "";
      document.getElementById("todo-date").value= "";

       let display = document.getElementById("display");
       display.append(element)
    })
}

render();