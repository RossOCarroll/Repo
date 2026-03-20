import './style.css'

const form = document.getElementById('todo-form');
const formInput = document.getElementById('todo-title');
const formError = document.getElementById('form-error');
const status = document.getElementById('status');
const todoList = document.getElementById('todo-list');
const addBtn = form.querySelector('button');
let todos

async function fetchTodos() {
  try {
    let response = await fetch('/src/todos.json');
    if (!response.ok) {
      throw new Error(`There was an HTTP error: ${response.status}`);
    }

    return await response.json();

  } catch(error) {
    status.textContent = 'Could not load todos.';
  }
}

async function addTodo(title) {
  try {
    let response = await fetch('/todos', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({'title': title})
    })
    if (!response.ok) {
      throw new Error(`There was an HTTP error: ${response.status}`);
    }

    status.textContent = '';
    formInput.value = '';
    let newTodo = await response.json();
    todos.push(newTodo);
    loadTodos()
  } catch(error) {
    status.textContent = 'Could not save new todo'
  } finally {
    addBtn.disabled = false;
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  status.textContent = '';
  let newTitle = formInput.value.trim();

  if (newTitle.length <= 0) {
    formError.textContent = 'Title is required.';
    return;
  }

  formError.textContent = '';
  status.textContent = 'Saving...';
  addBtn.disabled = true;
  addTodo(newTitle);
})

async function loadTodos() {
  todoList.innerHTML = '';
  todos = await fetchTodos() || [];

  todos.forEach(todo => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    if (todo.completed) {
     span.textContent = todo.title + ' (done)'; 
    } else {
      span.textContent = todo.title;
    }
    
    li.appendChild(span);
    todoList.appendChild(li);

  })
}



loadTodos();


import './style.css'

const filtersDiv = document.getElementById('filters');
const categoryFilter = document.getElementById('category-filter');
const applyFiltersBtn = document.getElementById('apply-filters');
const status = document.getElementById('status');
const productList = document.getElementById('product-list');

let productsCache;

async function fetchProducts() {
  try {
    let response = await fetch('/src/products.json');

    if (!response.ok) {
      throw new Error(`There was an HTTP error ${response.status}`);
    }
    let products = await resoponse.json();
    return products;
  } catch(error) {
    console.error(error);
  }
}

async function loadProducts() {
  productsCache = await fetchProducts() || [];
  console.log(productsCache);
}

loadProducts()
