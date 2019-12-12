document.addEventListener("DOMContentLoaded", () => {
  // your code here


  const form = document.querySelector("#create-task-form")
  const input = document.querySelector('#new-task-description')
  const prLabel = document.createElement('label')
  prLabel.innerText = ' Priority: '
  input.insertAdjacentElement('afterend', prLabel)
  const prSelect = document.createElement('select')
  prSelect.innerHTML = '<option disabled selected>priority</option> <option>High</option> <option>Medium</option> <option>Low</option>'
  prLabel.insertAdjacentElement('afterend', prSelect)


  form.addEventListener("submit", function(e){
    e.preventDefault()

    const ul = document.querySelector("ul")
    let li = document.createElement("li")
    li.innerHTML = `${input.value} <button onclick="this.parentNode.remove()">x</button>`

    switch (prSelect.value) {
      case 'High':
        li.style.color = 'red';
        break;
      case 'Medium':
        li.style.color = 'orange';
        break;
      case 'Low':
        li.style.color = 'green';
        break;
      default:
        null;
        break;
    }
    ul.appendChild(li)
    form.reset()
  })
 
});

