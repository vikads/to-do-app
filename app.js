function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value) { return; }

    console.log(id);

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id++;

    newToDoText.value = '';

    renderTheUI();
  }

  function deleteToDo(id) {
    toDos = toDos.filter(item => item.id !== id);
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      newLi.id = toDo.id;
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      let deleteButton = document.createElement('button');
      deleteButton.type = "button";
      deleteButton.innerHTML = "Delete to-do";
      deleteButton.addEventListener('click', event => {
        console.log('Delete Button Clicked: ', event);
        deleteToDo(toDo.id);
        renderTheUI();
        
      });


      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

  renderTheUI();
};

window.onload = function() {
  onReady();
};
