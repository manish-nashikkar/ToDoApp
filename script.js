// Function to add a new task to the list
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    return;
  }

  const taskList = document.getElementById('taskList');
  const listItem = document.createElement('li');

  // Create a checkbox element
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', toggleTaskCompletion);

  // Create a label for the task text
  const label = document.createElement('label');
  label.textContent = taskText;

  // Append the checkbox and label to the list item
  listItem.appendChild(checkbox);
  listItem.appendChild(label);

  // Append the new task to the task list
  taskList.appendChild(listItem);

  // Clear the input field after adding the task
  taskInput.value = '';
}

// Function to toggle the completion state of a task
function toggleTaskCompletion(event) {
  const checkbox = event.target;
  const listItem = checkbox.parentNode;
  if (checkbox.checked) {
    listItem.classList.add('completed');
  } else {
    listItem.classList.remove('completed');
  }
}
