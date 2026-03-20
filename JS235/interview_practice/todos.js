const POST_API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';
const GET_API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
const DELETE_API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos/';
const PATCH_API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos/';
let todosCache = [];
const form = document.getElementById('todoForm');
const input = document.getElementById('title');
const todosList = document.getElementById('todos');
const addBtn = form.querySelector('button');

form.addEventListener('submit', (event) => handleSubmit(event));
todosList.addEventListener('click', (event)=> handleDelete(event));
todosList.addEventListener('change', (event) => handleToggle(event));

async function fetchTodos() {
  try {
    let response = await fetch(GET_API_ENDPOINT);

    if (!response.ok) {
      throw new Error(`There was an HTTP error ${response.status}`);
    }

    todosCache = await response.json();

    loadTodos();
  } catch(error) {
    console.error(error);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  addBtn.disabled = true;

  let title = input.value.trim();;

  if (!title) {
    addBtn.disabled = false;
    alert('Title must not be empty');
    return;
  }
  const data = {
      "title": title,
      "completed": false
  }

  postTodo(data);
  input.value = '';
}

async function postTodo(data) {

  try {
    let response = await fetch(POST_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error(`There was and HTTP error ${response.status}`)
    }

    let todoData = await response.json();
    console.log(todoData);
    todosCache.push(todoData);
    loadTodos()
    addBtn.disabled = false;

  } catch(error) {
    console.error(error)
    addBtn.disabled = false;
  }
}

function loadTodos() {
  todosList.innerHTML = '';
  todosCache.forEach(todo => {
    const li = document.createElement('li');
    li.dataset.id = todo.id;

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = todo.completed;

    const textSpan = document.createElement('span');
    const deleteBtn = document.createElement('button');
    

    deleteBtn.textContent = 'Delete';

    textSpan.textContent = todo.title;
    li.appendChild(checkBox);
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    todosList.appendChild(li);
  })
}

function handleToggle(event) {
  let checkBox = event.target;
  if (event.target.type !== 'checkbox') return;

  const li = event.target.closest('li')
  const id = Number(li.dataset.id);
  const completed = event.target.checked;
  const todo = todosCache.find(todo => todo.id === id);

  if (completed) {
    todo.completed = true;
    sendPatch(id, todo.completed);
  } else {
    todo.completed = false;
    sendPatch(id, todo.completed);
  }
}

async function sendPatch(id, completed) {
  try {
    let response = await fetch(PATCH_API_ENDPOINT + id, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      }, 
      body: JSON.stringify({'completed' : completed})
    })

    if (!response.ok) {
      throw new Error(`There was an HTTP error ${response.status}`);
    }

  } catch(error) {
    console.log(error);
  }
}

function handleDelete(event) {
  if (!event.target.closest('button')) {
    return;
  }

  let id = event.target.parentElement.dataset.id;
  let li = event.target.closest('li');

  todosCache = todosCache.filter(todo => todo.id !== Number(id));
  li.remove();
  deleteTodo(id);
}

async function deleteTodo(id) {
  try {
    let response = await fetch(DELETE_API_ENDPOINT + id, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error(`There was and HTTP error ${response.status}`)
    }

  } catch(error) {
    console.error(error)
  }
}

fetchTodos()

