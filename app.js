function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDeafault();

    // get the text;
    let title = newToDoText.value;

    // create new li
    let newLi = document.createElement('li');

    // create new input;
    let checkbox = documet.createElement('input');

    // set the input type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

  });
}


window.onload = function() {
  onReady();
};
