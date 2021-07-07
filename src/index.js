document.addEventListener("DOMContentLoaded", () => {
});
//all constants
const userInput = document.getElementById("new-task-description")
const priority = document.getElementById('task-priority')
const taskForm = document.getElementById("create-task-form")
const tasksList = document.getElementById ("tasks")

// creates new task
  taskForm.addEventListener('submit', function(e){
    e.preventDefault()
    // create new task li
      let input = userInput.value
      newLi = document.createElement('li')
      newLi.innerText = input
    // changes color based on priority
      if (priority.value === "high"){
        newLi.style.color = "#FF0000"}
      else if (priority.value === "medium"){
        newLi.style.color = "#FFD700"}
      else if (priority.value === "low"){
        newLi.style.color = "#008000"}
        tasksList.append(newLi)
    // create delete button
      newDeleteButton = document.createElement('button')
      newDeleteButton.innerText = "X"
      newLi.appendChild(newDeleteButton)
    // resets form
      taskForm.reset()
  })
// deletes task
  tasksList.addEventListener('click', function(e){
    let targetLi = e.target.parentNode
    targetLi.remove()
  })






// As a challenge, implement a sorting functionality that displays the tasks ASC/DESC based on priority

// An additional input field (e.g. user, duration, date due)

// Ability to edit tasks

// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM