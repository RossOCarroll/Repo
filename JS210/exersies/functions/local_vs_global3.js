var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// This code will also output `'This is local'`. This reason is that on line 1 we have
// a variable declared at the global and assigned to the string 'this is global`.
// line 4 in the someFuction function we have the myVar variable being reassigned to the
// String 'This is local' Line 7 we invoke the someFunction function which will preform the reassignement.
// Line 8 we log to the console `myVar` which will output 'This is local`. 