document.addEventListener("DOMContentLoaded", function test() {
  let swagform = document.querySelector('#create-task-form');
  let input = document.querySelector('#new-task-description');
  let ul = document.querySelector('#tasks');
  
  swagform.addEventListener("submit", function (event) {
    event.preventDefault();
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = 'Delete';
    
    let p = document.createElement('p');
    p.innerText = `${input.value}`
    li.append(p);

    button.addEventListener('click', function (event) {
      let parentLi = event.target.parentNode;
      parentLi.remove();
    });
    li.append(button);

    ul.appendChild(li);
  });
});