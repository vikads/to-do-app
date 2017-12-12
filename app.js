function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDos.forEach(function(toDo) {
      const newToDo = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const.title = document.createElement('span');
      title.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });

  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.valuje = '';
  });

  renderTheUI();

};


window.onload = function() {
  onReady();
};
