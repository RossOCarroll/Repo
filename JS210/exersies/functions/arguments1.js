let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// This code will log to the console 7. Line 1 we the variable a declared and assigned to
// the number 7 at the global scope. line 7 we invoke the myValue function and pass in and argument 
// of the variable a. line 3 the myValue function has a parameter b which is a variable scoped at the function
// level that gets assigned the value of a which is 7. line 4 we preform the statement
/// b += 10 which will increment 7 tp 17. line 8 when we log to the console a which is 7
// as this a is number and is immutable and remains unchanged by the myValue function.