var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// line 1 the variable my Var is declared and is scoped at the global. In the function
// definition on lines 3-5 we log to the console myVar which will log to the console
// 'This is global' when the someFunction is invoked on line 7. This is because the inner
// scope in the function has access to the outer global scope.