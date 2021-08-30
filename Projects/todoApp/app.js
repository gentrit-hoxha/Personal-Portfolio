//Select DOM
"use strict";

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteFunction);
filterOption.addEventListener("click", filterTheTodo);

var count = 0;

//Functions
function addTodo(event) {
  //Preventing from submiting the form
  event.preventDefault();
  console.log("Button working");

  if (todoInput.value == "") {

  } 
  
  else {
    
    //Creating the todoDiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Creating the li of the todoList
    const newTodo = document.createElement("li");
    newTodo.innerText = `${count = count +1}.  ${todoInput.value}`;
    todoInput.value = "";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Creating the check button
    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class="fas fa-check"> </i>';
    checkBtn.classList.add("complete-btn");
    todoDiv.appendChild(checkBtn);

    //Creating the Delete BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
    trashButton.classList.add("trash-btn");

    todoDiv.appendChild(trashButton);

    todoList.append(todoDiv);
  }
}

function deleteFunction(e) {
  const item = e.target;

  // console.log(item.classList[0]);
  // console.log(item.classList[1]);
  // console.log(item.classList[2]);

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

   function filterTheTodo(e) {
     const todos = todoList.childNodes;

     todos.forEach(function (todo) {
          
      switch (e.target.value) {
        case 'all':
          todo.style.display = 'flex'
        break;

        case 'completed':
          if (todo.classList.contains("completed")) {
             todo.style.display = "flex";
            } 
          else {
              todo.style.display = "none";
            }
        break;
                  
        case 'uncompleted':
          if(!todo.classList.contains("completed")) {
              todo.style.display = "flex";  
              } 
           else {
              todo.style.display = "none";
             }
         break;    
           }
     });
   }




















