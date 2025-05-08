var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// This code will output the string 'This is local'. On line 4 from within the function
// we are declaring a myVar variable and assigning it the string `'This is local'`, this 
// variable is scoped at the function level as it is declared with the keyword `var`.
// Line 5 we log to the console the myVar variable that is scoped ar the someFunction function.
// line 8 we then invoke the someFunction function. In this code the variable declared on line 1
// is declared in the global scope but is not output.