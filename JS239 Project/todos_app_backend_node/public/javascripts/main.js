import templater from "./templates.js";

class App {
  constructor(templater) {
    this.templater = templater;
    this.container = document.getElementById('app');

    this.todosData = {
      todos: [],
      done: [],
      todos_by_date: {},
      done_todos_by_date: {},
      selected: [],
      current_section: { title: 'All Todos', data: 0 },
      active_date_all: null,
      active_date_completed: null
    };

    this.init();
  }

  async init() {
    await this.loadTodos();
  }

  bindEvents() {
    this.newTodoBtn.addEventListener('click', () => this.openModal());
    this.modalLayer.addEventListener('click', () => this.closeModal());
    this.modalForm.addEventListener('submit', (event) => this.handleSaveTodo(event));
    this.completeBtn.addEventListener('click', (event) => this.handleComplete(event));
    this.todoTable.addEventListener('click', (event) => this.handleDelete(event));
    this.todoTable.addEventListener('click', (event) => this.handleCheckbox(event));
    this.todoTable.addEventListener('click', (event) => this.handleUpdate(event));
    
    this.allHeader.addEventListener('click', (event) => this.handleAllHeader(event));
    this.completedHeader.addEventListener('click', (event) => this.handleCompletedHeader(event))
    this.allLists.addEventListener('click', (event) => this.handleAllLists(event));
    this.completedLists.addEventListener('click', (event) => this.handleCompletedLists(event));

  }

  renderHtml() {
    this.container.innerHTML = this.templater.mainTemplate(this.todosData);

    this.modalDiv = document.getElementById('modal_div');
    this.modalLayer = document.getElementById('modal_layer');
    this.modalForm = document.getElementById('modal_form');
    this.newTodoBtn = document.getElementById('new-todo');
    this.todoTable = document.getElementById('todo-table');
    this.completeBtn = document.getElementById('completed');
    this.allHeader = document.getElementById('all_header');
    this.completedHeader = document.getElementById('all_done_header');
    this.allLists = document.getElementById('all_lists');
    this.completedLists = document.getElementById('completed_lists');
    this.modalDiv.style.display = 'none';

    this.bindEvents();
  }

  groupAndSort(arr) {
    const grouped = {};
  
    arr.forEach(todo => {
      const date = todo.due_date || 'No Due Date';
      if (!grouped[date]) grouped[date] = [];
      grouped[date].push(todo);
    });
  
    return Object.fromEntries(
      Object.entries(grouped).sort((a, b) => {
        if (a[0] === 'No Due Date') return -1;
        if (b[0] === 'No Due Date') return 1;
        return new Date(`01/${a[0]}`) - new Date(`01/${b[0]}`);
      })
    );
  }

  populateTodosByDate() {
    this.todosData.todos_by_date = this.groupAndSort(this.todosData.todos);
    this.todosData.done_todos_by_date = this.groupAndSort(this.todosData.done);
  }

  closeModal() {
    this.modalLayer.style.display = 'none';
    this.modalDiv.style.display = 'none';
  }

  openModal() {
    this.modalLayer.style.display = 'block';
    this.modalDiv.style.display = 'block';
  }

  async fetchTodos() {
    try {
      const response = await fetch('/api/todos');
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return await response.json();
    } catch(error) {
      console.error(error);
    }
  }

  async loadTodos() {
    const list = await this.fetchTodos();
    if (!list) return;

    this.todosData.todos = list.map(todo => {
      const due_date = todo.day && todo.month && todo.year
        ? `${todo.month.padStart(2,'0')}/${todo.year.slice(-2)}`
        : 'No Due Date';
      return { ...todo, due_date };
    });

    this.todosData.done = this.todosData.todos.filter(todo => todo.completed);
    this.todosData.selected = this.todosData.todos;

    this.todosData.active_date_all = null;
    this.todosData.active_date_completed = null;

    this.populateTodosByDate();
    this.todosData.current_section = {
      title: 'All Todos',
      data: this.todosData.selected.length
    };

    this.renderHtml();
  }

  async addTodo(todoData) {
    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todoData)
      });
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return await response.json();
    } catch(error) {
      console.error(error);
    }
  }

  async handleSaveTodo(event) {
    event.preventDefault();
    const formData = new FormData(this.modalForm);
    const todo = Object.fromEntries(formData.entries());

    if (!todo.title || todo.title.trim().length < 3) {
      alert('Title must be at least 3 characters long');
      return;
    }
    
    const payload = {
      title: todo.title,
      description: todo.description || ''
    };
  
    if (todo.due_day && todo.due_day !== 'Day') payload.day = todo.due_day;
    if (todo.due_month && todo.due_month !== 'Month') payload.month = todo.due_month;
    if (todo.due_year && todo.due_year !== 'Year') payload.year = todo.due_year;

    if (this.editingId) {
      await this.updateTodo(this.editingId, payload);
      this.editingId = null;
    } else {
      await this.addTodo(payload);
    }
  
    this.closeModal();
    this.modalForm.reset();
    await this.loadTodos();
  }

  async deleteTodo(id) {
    try {
      const response = await fetch(`/api/todos/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        if (response.status === 404) {
          const msg = await response.text();
          alert(msg);
          return false;
        }
        throw new Error(`HTTP error ${response.status}`);
      }
      return true;
    } catch(error) {
      console.error(error);
      return false;
    }
  }

  async handleDelete(event) {
    const deleteBtn = event.target.closest('.delete');
    if (!deleteBtn) return;

    const todoEle = deleteBtn.closest('[data-id]');
    const id = Number(todoEle.dataset.id);

    const success = await this.deleteTodo(id);
    if (success) await this.loadTodos();
  }

  async fetchTodo(id) {
    try {
      const response = await fetch(`/api/todos/${id}`);
      if (!response.ok) {
        if (response.status === 404) {
          const msg = await response.text();
          alert(msg);
          return false;
        }
        throw new Error(`HTTP error ${response.status}`);
      }
      return await response.json();
    } catch(error) {
      console.error(error);
    }
  }

  async updateTodo(id, todoData) {
    try {
      let response = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todoData)
      });

      if (!response.ok) {
        if (response.status === 404 || response.status === 400) {
          const msg = await response.text();
          alert(msg);
          return false;
        }
        throw new Error(`HTTP error: ${response.status}`)
      };

      return await response.json()
    } catch(error) {
      console.error(error)
    }
  }

  async handleUpdate(event) {
    let todoText = event.target.closest('.todo-text');
    if (!todoText) return;

    const todoEle = todoText.closest('[data-id]');
    if (!todoEle) return;

    const id = Number(todoEle.dataset.id);
    const todo = await this.fetchTodo(id);
    if (!todo) return;
    
    this.editingId = id;
    this.openModal();

    this.modalForm.querySelector('#title').value = todo.title || '';
    this.modalForm.querySelector('#due_day').value = todo.day || 'Day';
    this.modalForm.querySelector('#due_month').value = todo.month || 'Month';
    this.modalForm.querySelector('#due_year').value = todo.year || 'Year';
    this.modalForm.querySelector('#description').value = todo.description || '';
  }

  async handleComplete(event) {
    event.preventDefault();
    if (!this.editingId) {
      alert('Must create a todo before marking it complete.');
      return;
    };

    await this.updateTodo(this.editingId, {completed: true});
    
    this.closeModal();
    this.modalForm.reset();
    this.editingId = null;

    await this.loadTodos();
  }

  async handleCheckbox(event) {
    if (event.target.closest('.todo-text')) return;

    const td = event.target.closest('.list_item');
    if (!td) return;
  
    const todoRow = td.closest('tr[data-id]');
    if (!todoRow) return;
    const id = Number(todoRow.dataset.id);
  
    const checkboxInput = todoRow.querySelector('.todo-checkbox');
    checkboxInput.checked = !checkboxInput.checked;
  
    await this.updateTodo(id, { completed: checkboxInput.checked });
  
    const todo = this.todosData.todos.find(t => t.id === id);
    if (todo) todo.completed = checkboxInput.checked;
  
    await this.loadTodos();
  }

  handleAllLists(event) {  
    const dl = event.target.closest('#all_lists dl');
    if (!dl) return;
  
    const date = dl.dataset.title;
    this.todosData.selected = this.todosData.todos_by_date[date];
    this.todosData.current_section = { title: date, data: this.todosData.selected.length };
    this.todosData.active_date_all = date;
  
    this.todosData.active_date_completed = null;
    this.renderHtml();
  }

  handleCompletedLists(event) {
    const dl = event.target.closest('#completed_lists dl');
    if (!dl) return;
  
    const date = dl.dataset.title;
    this.todosData.selected = this.todosData.done_todos_by_date[date] || [];
    this.todosData.current_section = { title: date, data: this.todosData.selected.length };
    this.todosData.active_date_completed = date;
  
    this.todosData.active_date_all = null;
    this.renderHtml();
  }

  handleAllHeader() {
    this.todosData.selected = this.todosData.todos;
    this.todosData.current_section = { title: 'All Todos', data: this.todosData.todos.length };
    this.todosData.active_date_all = null;

    this.todosData.active_date_completed = null;
    this.renderHtml();
    return;
  }

  handleCompletedHeader() {
    this.todosData.selected = this.todosData.done;
    this.todosData.current_section = { title: 'Completed', data: this.todosData.done.length };
    this.todosData.active_date_completed = null;

    this.todosData.active_date_all = null;
    this.renderHtml();
    return;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App(templater);
});