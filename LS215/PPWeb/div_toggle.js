/*
You're given an array of length n, filled with false values (off). You loop through the array n times. On the 
i-th loop, you toggle every index where (index + 1) % i === 0. After n iterations, return the array.

Input:
  - A number 'n' that represents an array of falses
Output:
  - An array of booleans 

Rules:
  - Create an array of falses that is n in length
  - Iterate over the array n times
  - If the boolean if (index + 1) % i === 0;

Data structure:
  - Us an array to store the initial false booleans


Algorithm:
  - Create an array of falses that is n in length
    - From 0 to n
      - Append false to an empty array
  - loop n many times
    - Iterate over the falses
      - If (index + 1) % i === 0
        - If the toogled is false
          - return true
        - else if the current element is true 
          - return false
  - return array


*/

function createArray(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(false);
  }
  return array;
}

function divisibilityToggle(n) {
  let array = createArray(n);

  for (let i = 1; i <= n; i++) {
    array = array.map((bool, index) => {
      if ((index + 1) % i === 0) {
        return !bool;
      }
      return bool;
    })
  }

  return array;
}

console.log(divisibilityToggle(5)) 
console.log(divisibilityToggle(11)) 
console.log(divisibilityToggle(1)) 
console.log(divisibilityToggle(0)) 