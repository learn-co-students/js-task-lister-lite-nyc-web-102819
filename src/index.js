document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.getElementById("create-task-form")
  console.log("this is working",form)

  let textBox =  document.getElementById("new-task-description")
  let button = form.querySelectorAll('input')[1]
  

  let tasks = document.getElementById('tasks') // ul
  
  form.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log("button clicked")
    let li = document.createElement("li")
    li.innerText = textBox.value    //form.innerText
    tasks.append(li)
  } )




});
