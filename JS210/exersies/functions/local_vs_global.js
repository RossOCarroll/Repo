var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// This code will output the string 'This is global'. This is because on line 1
// we declare a global variable. In the someFunction we declare a variable `myVar`
// that is scoped to the function. When we log to the console `myVar` on line 8
// we get the myVar that references the global function.