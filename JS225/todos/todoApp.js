"use strict";

class Todo {
  #id;
  #title;
  #completed;
  #month;
  #year;
  #description;

  constructor(id, title, month, year, description, completed = false) {
    this.#id = id;
    this.#title = title;
    this.#month = month;
    this.#year = year;
    this.#description = description;
    this.#completed = completed;
  };

  get id() { return this.#id; }
  get title() { return this.#title; }
  get month() { return this.#month; }
  get year() { return this.#year; }
  get description() { return this.#description; }
  get completed() { return this.#completed; }

  _setTitle(val) { this.#title = val; }
  _setMonth(val) { this.#month = val; }
  _setYear(val) { this.#year = val; }
  _setDescription(val) { this.#description = val; }
  _setStatus(val) { this.#completed = val; }

  isWithinMonthYear(month, year) {
    return this.#month === month && this.#year === year;
  }

  toObject() {
    return {
      id: this.#id,
      title: this.#title,
      completed: this.#completed,
      month: this.#month,
      year: this.#year,
      description: this.#description
    };
  }
}

class TodoList {
  #todos;
  #nextId;

  constructor(initialTodos = []) {
    this.#todos = []
    this.#nextId = 1;

    if (Array.isArray(initialTodos)) {
      initialTodos.forEach(todoData => this.add(todoData));
    } else {
     this.add(initialTodos); 
    }
  }

  add(todo) {
    this.#todos.push(new Todo(
      this.#nextId++,
      todo.title,
      todo.month? Number(todo.month) : null,
      todo.year? Number(todo.year) : null,
      todo.description
    ));
  }

  deleteById(id) {
    let todo = this.#todos.find(todo => todo.id === id);
    if (!todo) throw new Error(`There is no todo with the id: ${id}`);
    this.#todos = this.#todos.filter(todo => todo.id !== id);
  }

  retrieveTodoById(id) {
    let todo = this.#todos.find(todo => todo.id === id);
    if (!todo) throw new Error(`There is no todo with the id: ${id}`);
    return todo.toObject();
  }

  updateTitle(id, title) {
    title = title.trim()
    if (title === '') throw new Error('Input must have a title.')
    let todo = this.#todos.find(todo => todo.id === id);
    todo._setTitle(title);
  }

  updateMonth(id, month) {
    let todo = this.#todos.find(todo => todo.id === id);
    if (!todo) throw new Error(`There is no todo with the id: ${id}`);
    todo._setMonth(Number(month));
  }

  updateYear(id, year) {
    let todo = this.#todos.find(todo => todo.id === id);
    if (!todo) throw new Error(`There is no todo with the id: ${id}`);
    todo._setYear(Number(year));
  }

  updateDescription(id, description) {
    let todo = this.#todos.find(todo => todo.id === id);
    if (!todo) throw new Error(`There is no todo with the id: ${id}`);
    todo._setDescription(description);
  }

  updateStatus(id, status) {
    let todo = this.#todos.find(todo => todo.id === id);
    if (typeof status !== 'boolean') throw new Error('Status must be true or false');
    todo._setStatus(status);
  }

  get todos() {
    return this.#todos.map(todo => {
      return new Todo(
        todo.id,
        todo.title,
        todo.month,
        todo.year,
        todo.description,
        todo.completed,
      )
    })
  };

}

class TodoManager {
  #list

  constructor(todos) {
    this.#list = new TodoList(todos);
  }

  retrieveAllTodos() {
    return this.#list.todos;
  }

  retrieveAllCompletedTodos() {
    return this.retrieveAllTodos().filter(todo => todo.completed);
  }

  retrieveTodosMonthYear(month, year) {
    return this.retrieveAllTodos().filter(todo => todo.isWithinMonthYear(month, year))
  }

  retrieveAllCompletedTodosMonthYear(month, year) {
    return this.retrieveAllTodos().filter(todo => {
      return todo.isWithinMonthYear(month, year) && todo.completed;
    })
  }

  get list() { return this.#list }
}



let todoData1 = {
  title: 'Buy Milk',
  month: '1',
  year: '2017',
  description: 'Milk for baby',
};

let todoData2 = {
  title: 'Buy Apples',
  month: '',
  year: '2017',
  description: 'An apple a day keeps the doctor away',
};

let todoData3 = {
  title: 'Buy chocolate',
  month: '1',
  year: '',
  description: 'For the cheat day',
};

let todoData4 = {
  title: 'Buy Veggies',
  month: '',
  year: '',
  description: 'For the daily fiber needs',
};

let todoSet = [todoData1, todoData2, todoData3, todoData4];
// const newList = new TodoList();
// todoSet.forEach(todo => newList.add(todo));
// newList.todos.forEach(todo => console.log(todo.toObject()))

export { Todo, TodoList, TodoManager, todoSet }