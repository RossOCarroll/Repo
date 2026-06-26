/*

Implement a recursive function that reverses a given string. The function should take a string as input and 
return its reverse. For example, if the input is "hello", the function should return "olleh". Solve the 
problem using recursion.


Input:
  - A string
Output:
  - the input string but reversed

Data structure:
  - Recursive

Algorithm:
  - create an empty string
  - Create an index that is the length of the input string - 1
  - Recursive function
    - Base case: if the index < 0 return
    - Add to the result the letter at index
    - recursive case: call function with index - 1
  - return result




*/

function reverseString(string) {
  let result = '';
  let index = string.length - 1;

  function reverse(index) {
    if (index < 0) return;
    result += string[index];
    reverse(index - 1);
  }

  reverse(index);
  return result;
}


console.log(reverseString("hello") === "olleh");
console.log(reverseString("world") === "dlrow");
console.log(reverseString("a") === "a");
console.log(reverseString("") === "");
console.log(reverseString("recursion") === "noisrucer");

// All test cases should log true.