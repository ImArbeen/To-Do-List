document.addEventListener('DOMContentLoaded', function () {
      const todoForm = document.getElementById('todoForm');
      const addTodoBtn = document.getElementById('addTodoBtn');
      const todoList = document.getElementById('todoList');
      const clearAllBtn = document.getElementById('clearAllBtn');
  
      addTodoBtn.addEventListener('click', function (event) {
          event.preventDefault();
          const todoText = todoForm.elements['todo'].value;
          if (todoText.trim() !== '') {
              const listItem = document.createElement('li');
              listItem.textContent = todoText;
              listItem.classList.add('flex', 'items-center', 'mb-2');
              
              const checkbox = document.createElement('input');
              checkbox.type = 'checkbox';
              checkbox.classList.add('mr-2');
              checkbox.addEventListener('change', function () {
                  if (checkbox.checked) {
                      listItem.classList.add('completed');
                  } else {
                      listItem.classList.remove('completed');
                  }
              });
              listItem.appendChild(checkbox);
  
              const deleteButton = document.createElement('button');
              deleteButton.textContent = 'Delete';
              deleteButton.classList.add('delete-btn');
              deleteButton.addEventListener('click', function () {
                  listItem.remove();
              });
              listItem.appendChild(deleteButton);
  
              todoList.appendChild(listItem);
              todoForm.reset();
          } else {
              alert('Please enter a valid to-do item.');
          }
      });
  
      clearAllBtn.addEventListener('click', function () {
          todoList.innerHTML = '';
      });
  });
  