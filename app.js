function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text;
    let title = newToDoText.value;

    // create new li
    let newLi = document.createElement('li');

    // create new input;
    let checkbox = document.createElement('input');

    // homewor assignment - create delete button
    let deleteButton = document.createElement('button');

    deleteButton.type = "button";
    deleteButton.innerHTML = "Delete to-do";
    deleteButton.addEventListener('click', event => {
      console.log('Delete Button Clicked: ', event);
      event.srcElement.parentElement.remove();
    });

    // set the input type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // homework assignment - attach the delete button
    newLi.appendChild(deleteButton);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';
  });
};


window.onload = function() {
  onReady();
};
