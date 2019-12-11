// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });


// save use input from textbox
function saveInput(){
  const input = document.getElementById("new-task-description")
  const newInput = input.value
  return newInput
}

// create new task
function createTask(input){
  let li = document.createElement("li")
  li.innerHTML = `
  <h3> ${input} </h3>
  `
  return li
}

// append new task
const taskList = document.getElementById("tasks")
function appendTask(arg){
  taskList.append(createTask(arg))
}

function run(event){
  event.preventDefault()
  appendTask(saveInput())
}

// submit button
const form = document.getElementById("create-task-form")


form.addEventListener("submit", run)
