=== Part 1: Todos ===

Creates todos that have unique ids. The todo objects it creates only have the following properties and shared methods:

Properties:
* id (must be unique)
* title
* completed
* month
* year
* description

Shared Methods:
* isWithinMonthYear(month, year)

=== Part 2: todoList === 

- The todoList contains a collection of todo objects, It provides an interface for manipulating the collection of objects 
- The todoList maintains the integrity of the collection by returning only a copy of the collection anytime that a method returns all or a subset of it.
- It does not allow users or other objects to manipulate the values of todo objects directly.

Subject to the collection integrity requirements described above, the todoList object supports the following operations:

- Maintains a collection of todo objects
- Adds a todo object to the collection
- Deletes a todo object from the collection
- Initializes the collection with todo objects
- Updates existing properties of a specific todo object
- Returns a specified todo object based on its id property

todoList may define additional helper methods if you want, as long as these don't interfere with the project requirements.

=== Part 3: Todo Manager ===

The todoManager interfaces with the todoList object. It has methods that query the todoList to return all or a subset of the todo objects as an array of todo objects.

The todoManager can query the todoList object in the following ways:

- Return all todo objects
- Return all completed todo objects
- Return all todo objects within a given month-year combination
- Return all completed todo objects within a given month-year combination

todoManager may define additional helper methods if you want, as long as these don't interfere with the project requirements.

The application does not include getting inputs from a user. As such, you may assume that the following data are available to be used as inputs: