const todosList = document.getElementById('todos');
const message = document.getElementById('message');
const addBtn = document.getElementById('add');
const newTodo = document.getElementById('new-todo');
let todos = [];
addBtn.addEventListener('click', () =>  handleAdd());

function handleAdd() {
  let lastId = todos[todos.length - 1]?.id || 0;

  let newTodoObj = {id : lastId + 1, task: newTodo.value,  completed: false};
  todos.push(newTodoObj);
  newTodo.value = '';
  loadTodos()
}

todosList.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    event.target.parentElement.remove();
    allCompleted() 
  }
})

async function fetchTodos() {
  try {
    let response = await fetch('/src/todos.json');
    
    if (!response.ok) throw new Error(`There was an HTTP problem: ${response.status}`);

    let todos = await response.json();
    return todos;

  } catch(error) {
    console.error(error)
  }
}

function allCompleted() {
  const todos = document.querySelectorAll(`#todos input[type='checkbox']`);
  let allCompleted = [...todos].every(todo => todo.checked);

  if (allCompleted) {
    message.textContent = 'All Todos are complete';
  } else {
    message.textContent = '';
  }

}

function handleCheck(event, textSpan, todo) {
  if (event.target.checked) {
    textSpan.textContent = todo.task + ' (done)';
  } else {
    textSpan.textContent = todo.task;
  }

  allCompleted();
}

async function loadTodos() {
  if (todos.length === 0) {
    const data = await fetchTodos(); 
    todos = await data.todos
  }
  todosList.innerHTML = '';
  
  
  todos.forEach(todo => {
    const li = document.createElement('li');
    const todoCheckbox = document.createElement('input');
    todoCheckbox.type = 'checkbox';
    todoCheckbox.checked = todo.completed;
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete')
    deleteBtn.textContent = 'Delete';
    li.dataset.id = todo.id;
    const textSpan = document.createElement('span');
    textSpan.textContent = todo.task + (todo.completed ? ' (done)' : '')

    li.append(textSpan);
    li.append(deleteBtn);

    todoCheckbox.addEventListener('change', (event) => handleCheck(event, textSpan, todo))

    li.prepend(todoCheckbox);
    todosList.appendChild(li);
  })

  allCompleted();
}

loadTodos();


{/* <h1>Todos</h1>

<ul id="todos"></ul>

<p id="message"></p>

<input id="new-todo">
<button id="add">Add</button>

<script src="app.js"></script>
  <script src="script.js"></script> */}