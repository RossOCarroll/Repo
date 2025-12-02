Hi thanks for grading my Todo app! Had a lot of fun doing it.

Assumptions:
  - Was not sure if the Todo class should generate the unique ids so I generated from the TodoList class and
    passed them in.
  - I think the month and the year should be converted into a number. As to prevent bugs to do with comparison.
  - I choose to do an input verification on title but not the pother properties as it seemed like the todoset 
    that we are importing had some month and year properties values as empty strings.
  - I didnt see any requirements about input validation but i noticed that the objects in todo set all had a    title so I made logic for updating the title and status.

Trade Offs
  - There is a bit of code duplication in TodoList, I did think about having recalling retrieveTodoById in the  other methods but I know there is a requirement of maintaining data integrity and return a copy of the todo rather then the original. 

Notes:
  - I didn't add any dependencies as to keep the small project easy to run.
  - I used ES Modules to run the test suite todoTest.js.
