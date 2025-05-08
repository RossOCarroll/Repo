function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// On line 2 when we declare a variable without a keyword var, const or let. It will be declared
// at the global scope. After invoking the someFunction on line 5 and logging to the console
// of myVar on line 6 we will get the output 'This is global`.