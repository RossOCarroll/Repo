import { Todo, TodoList, TodoManager, todoSet  } from './todoApp.js'

function pass(msg) {
  console.log('\x1b[32m PASS:\x1b[0m ' + msg);
}

function fail(msg) {
  console.log('\x1b[31m FAIL:\x1b[0m ' + msg);
}

function assert(condition, msg) {
  if(!condition) throw new Error(msg || 'Assertion Failed.');
}

console.log('\n=== Test Todos ===\n');

try {
  console.log('- Adding todos')
  const newList = new TodoList(todoSet);
  assert(newList.todos.length === todoSet.length, '4 todos added should have a length of 4');
  pass('4 todos added should have a length of 4')
} catch (error) { fail(error.message) }

try {
  console.log('- Add a single todo')
  const newList = new TodoList(todoSet[0]);
  assert(newList.todos.length === 1, '1 todo added should have a length of 1');
  pass('1 todo added should have a length of 1')
} catch (error) { fail(error.message) }

try {
  console.log('- Verifying properties')
  const todo = new Todo(1, 'Buy Milk', '1', '2017', 'Milk for baby');
  assert(todo.id === 1, 'Todo id should be 1');
  assert(todo.title === 'Buy Milk', 'Title should match');
  assert(todo.year === '2017', 'year should be 2017');
  assert(todo.completed === false, 'Newly initialized todo should have complete set to false');
  assert(todo.month === '1', 'month should be 1');
  assert(todo.description === 'Milk for baby', 'Should match description')
  pass('4 todos added should have a length of 4');
} catch (error) { fail(error.message) }

try {
  console.log('- Test for isWithinMonthYear method')
  const todo = new Todo(1, 'Buy Milk', 1, 2017, 'Milk for baby');
  assert(todo.isWithinMonthYear(1, 2017) === true, 'Should return true if in range');
  assert(todo.isWithinMonthYear(2, 2017) === false, 'Should return false if out of range');
  pass('Should return a boolean on weather or not input is in range');
} catch (error) { fail(error.message) }

try {
  console.log('- Deleting a todo by id')
  const newList = new TodoList(todoSet);
  newList.deleteById(1);
  assert(newList.todos.length === 3, '4 todos added one deleted should have 3 todos');
  pass('4 todos added one deleted should have 3 todos')
} catch (error) { fail(error.message) }

try {
  console.log('- Deleting a non-existent todo by ID')
  const newList = new TodoList(todoSet);
  newList.deleteById(999);
  fail('Deleting non-existent ID does not break list');
} catch(_) {
  pass('Id not found')
}

try {
  console.log('- Updating title')
  const newList = new TodoList(todoSet);
  newList.updateTitle(1, 'Buy Cheese');
  assert(newList.retrieveTodoById(1).title === 'Buy Cheese', 'Title Should be updated');
  pass('Title updated by using updateTitleById')
} catch (error) { fail(error.message) }

try {
  console.log('- Retrieving by id')
  const newList = new TodoList(todoSet);
  const retrievedTodo = newList.retrieveTodoById(1);
  assert(retrievedTodo.id === 1, 'Retrieved todo should have id 1');
  assert(retrievedTodo.title === todoSet[0].title, 'Retrieved todo title should match original');
  pass('retrieveTodoById returns the correct todo object')
} catch (error) { fail(error.message) }

try {
  console.log('- Retriving todo by Id')
  const newList = new TodoList(todoSet);
  newList.retrieveTodoById(6);
  fail('should throw error for a non-existent ID.')
} catch(_) {
  pass('Id not found')
}

try {
  console.log('- Updating title')
  const newList = new TodoList(todoSet);
  newList.updateTitle(1, 'Buy Cheese');
  assert(newList.retrieveTodoById(1).title === 'Buy Cheese', 'Title Should be updated');
  pass('Title updated by using updateTitleById')
} catch (error) { fail(error.message) }

try {
  console.log('- UptateTitle should throw an error if id not found')
  const newList = new TodoList(todoSet);
  newList.updateTitle(6, 'Buy Cheese');
  fail('should throw error for a non-existent ID.')
} catch(_) {
pass('Id not found')
}

try {
  console.log('- UptateTitle should throw an error if no title is input')
  const newList = new TodoList(todoSet);
  newList.updateTitle(1, '');
  fail('should throw error for an empty title')
} catch(_) {
pass('Throws error for invalid input empty string')
}

try {
  console.log('- Updating month')
  const newList = new TodoList(todoSet);
  newList.updateMonth(1, 11);
  assert(newList.retrieveTodoById(1).month === 11, 'Month Should be updated');
  pass('Month updated by using updateMonth');
} catch (error) { fail(error.message) }

try {
  console.log('- Updating year')
  const newList = new TodoList(todoSet);
  newList.updateYear(1, 2015);
  assert(newList.retrieveTodoById(1).year === 2015, 'Year Should be updated');
  pass('Year updated by using updateYear');
} catch (error) { fail(error.message) }

try {
  console.log('- Updating description')
  const newList = new TodoList(todoSet);
  newList.updateDescription(1, 'New description');
  assert(newList.retrieveTodoById(1).description === 'New description', 'Description Should be updated');
  pass('Description updated by using updateDescription');
} catch (error) { fail(error.message) }

try {
  console.log('- Check that complete property defaults to false')
  const newList = new TodoList(todoSet);
  assert(newList.retrieveTodoById(1).completed === false, 'Default should be false');
  pass('Newly added todo should default completed property to false');
} catch (error) { fail(error.message) }

try {
  console.log('- Update Status')
  const newList = new TodoList(todoSet);
  newList.updateStatus(1, '');
  fail('should throw error for an an input that is not a boolean')
} catch(_) {
  pass('Throws error for invalid input')
}

try {
  console.log('- Check that update status works')
  const newList = new TodoList(todoSet);
  newList.updateStatus(1, true);
  assert(newList.retrieveTodoById(1).completed === true, 'Updated status should be true');
  pass('Updating status to true should be true');
} catch (error) { fail(error.message) };


try {
  console.log('- Retrieving all the todos from TodoManager')
  const manager = new TodoManager(todoSet);
  assert(manager.retrieveAllTodos().length === 4);
  pass('Retrieving all todos should have a length of 4')
} catch (error) { fail(error.message) };

try {
  console.log('- Retrieving all completed todos from TodoManager')
  const manager = new TodoManager(todoSet);
  manager.list.updateStatus(1, true);
  manager.list.updateStatus(3, true);
  assert(manager.retrieveAllCompletedTodos().length === 2);
  pass('Retrieved all completed todos should equal length of 2')
} catch (error) { fail(error.message) };


try {
  console.log('- Retrieving todos that fall within month and year from TodoManager')
  const manager = new TodoManager(todoSet);
  assert(manager.retrieveTodosMonthYear(1, 2017).length === 1, 'Length should be 1');
  pass('Retrieved todo that falls within month and year.. length should be one')
} catch (error) { fail(error.message) };

try {
  console.log('- Retrieving todos that fall within month and year from TodoManager')
  const manager = new TodoManager(todoSet);
  manager.list.updateStatus(1, true);
  assert(manager.retrieveAllCompletedTodosMonthYear(1, 2017).length === 1, 'Length should be 1');
  pass('Retrieved todo that falls within month and year and is completed')
} catch (error) { fail(error.message) };

try {
  console.log('- retrieveTodoById returns a copy not a reference')
  const newList = new TodoList(todoSet);
  const todoCopy = newList.retrieveTodoById(1);
  todoCopy.title = 'Modified';
  assert(newList.retrieveTodoById(1).title !== 'Modified', 'Original todo should not be affected');
  pass('retrieveTodoById returns a copy');
} catch (error) { fail(error.message) };

try {
  console.log('- retrieveAllTodos returns a copy')
  const newList = new TodoList(todoSet);
  const todosCopy = newList.todos;
  todosCopy.pop();
  assert(newList.todos.length === 4, 'Original list should not be affected when modifying returned array');
  pass('retrieveAllTodos returns a copy');
} catch (error) { fail(error.message) };

try {
  console.log('- retrieveAllTodos returns a deep copy');
  const newList = new TodoList(todoSet);
  const todo1 = newList.todos[0];
  todo1._setTitle('Mumbo jumbo');
  const todoFromList = newList.retrieveTodoById(todo1.id);
  assert(todo1.title !== todoFromList.title, 'Original todo should not be affected when modifying todo from copy');
  pass('retrieveAllTodos returns a deep copy');
} catch (error) { fail(error.message) }