class App {
  constructor(todos) {
    this.todos = todos;
    this.todosContainer = document.querySelector('ul');
    this.overlay = this.createOverLay();
    this.confirmPrompt = document.querySelector('.confirm_prompt');

    this.actionsDiv = this.createActionDiv();
    this.confirmPrompt.appendChild(this.actionsDiv);
    this.contextMenu = this.createContextMenu();

    document.addEventListener('click', event => {
      if (!this.contextMenu.contains(event.target)) {
        this.contextMenu.style.display = 'none';
      }
    })


    this.renderTodos();

  };

  renderTodos() {
    this.todosContainer.innerHTML = '';
    
    this.todos.forEach(todo => {
      const li = document.createElement('li');
      li.textContent = todo.title;

      const span = this.createSpan(todo.title, todo.id);
      li.appendChild(span);
      li.addEventListener('contextmenu', event => {
        event.preventDefault();
        this.showContextMenu(event, todo);
      });

      this.todosContainer.appendChild(li);
    })
  };

  createSpan(title, id) {
    const span = document.createElement('span');
    span.classList.add('remove');
    this.spanListener(span, title, id)
    return span;
  }

  spanListener(span, title, id) {
    span.addEventListener('click', event => {
      this.overlay.style.display = 'block';
      this.confirmPrompt.style.display = 'block';
      this.confirmPrompt.dataset.todoId = id;
      let msg = this.confirmPrompt.querySelector('p');

      if (!msg) {
        msg = document.createElement('p');
        this.confirmPrompt.insertBefore(msg, this.actionsDiv);
      }
      msg.textContent = `Are you sure you want to delete "${title}"?`;
    });
  };

  createActionDiv() {
    const actionDiv = document.createElement('div');
    actionDiv.classList.add('actions');

    const yesBtn = this.createBtn('yes');
    const noBtn = this.createBtn('no');

    yesBtn.addEventListener('click', () => this.handleDelete());
    noBtn.addEventListener('click', () => this.closePrompt());

    actionDiv.appendChild(yesBtn);
    actionDiv.appendChild(noBtn);

    return actionDiv;
  }

  createBtn(type) {
    const btn = document.createElement('a');
    btn.textContent = `${type[0].toUpperCase() + type.slice(1)}`;
    btn.classList.add(`confirm_${type}`);
    btn.href = '#';

    return btn;
  }

  handleDelete() {
    const id = Number(this.confirmPrompt.dataset.todoId);

    this.todos = this.todos.filter(todo => todo.id !== id);

    this.renderTodos();
    this.closePrompt();
  };

  closePrompt() {
    this.overlay.style.display = 'none';
    this.confirmPrompt.style.display = 'none';
  };

  createOverLay() {
    const overlay = document.querySelector('.overlay');
    overlay.addEventListener('click', () => {
      this.closePrompt();
    })

    return overlay;
  }

  createContextMenu() {
    const contextMenu = document.querySelector('.context_menu');

    const ul = document.createElement('ul');
    const details = document.createElement('li');
    details.textContent = 'Show Details';
    const edit = document.createElement('li');
    edit.textContent = 'Edit Todo';
    const deleteBtn = document.createElement('li');
    deleteBtn.textContent = 'Delete Todo';
    deleteBtn.classList.add('delete_todo');

    ul.appendChild(details);
    ul.appendChild(edit);
    ul.appendChild(deleteBtn);
    contextMenu.appendChild(ul);

    return contextMenu;
  }

  showContextMenu(event, todo) {
    this.contextMenu.style.display = 'block';
    this.contextMenu.style.left = event.pageX + 'px';
    this.contextMenu.style.top = event.pageY + 'px';
  
    this.contextMenu.dataset.todoId = todo.id;
  }
  
}

let todoItems = [
  {id: 1, title: 'Homework'},
  {id: 2, title: 'Shopping'},
  {id: 3, title: 'Calling Mom'},
  {id: 4, title: 'Coffee with Elphaba'},
];

document.addEventListener('DOMContentLoaded', () => {
  new App(todoItems);
})
