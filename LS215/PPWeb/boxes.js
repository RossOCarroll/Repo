/*
You have n boxes, each with a lock. Initially, all are locked. You have a key that fits every lock, but on 
each pass i, you open or close only boxes where the box number is divisible by i.

Return an array of open boxes.

Input:
  - A number that will act as n boxes as well as n passes
Output:
  - An array of numbers that represent the open boxes

Rules:
  - Create an array of boxes 1 through n
  - all boxes are locked
  - Make an n number of passes over those boxes
  - For each pass (i) if the box number is divisiable by i
    - set it to open if locked set it locked if open
  - return the array of open box numbers
  - 

Questions:
  - Will the input always be a number greater the 0?
  - Will there always be one argument? no arguments?

Data Structure:
  - Use an object of with numbers starting 

Algorithm:
  - Create an object with the key as number 1-n and values as booleans false
    - Create and empty object
    - loop starting at 1 to n
      - add i = false to the boxes object
  - Create an opoen box array
  - Loop from 1 to n  (i)
    - iterate over the boxes object
      - If the box number % i === 0
        - If the box is locked (false)
          - Set the box to true
        - Else if the box is open (true)?
          - set it to false
  - Iterate over the box object
    - If the value is true 
      - append the box number to the open boxes array
  - Return array

*/

function createBoxes(n) {
  let boxes = {};

  for (let i = 1; i<= n; i++) {
    boxes[i] = false;
  }
  return boxes;
}

function openBoxes(n) {
  if (n <= 0) return [];
  let boxObj = createBoxes(n);
  let openBox = [];

  for (let i = 1; i <= n; i++) {
    for (let box in boxObj) {
      let num = Number(box);
      if (num % i === 0) {
        boxObj[box] = !boxObj[box]
      }
    }
  }

  for (let box1 in boxObj) {
    if (boxObj[box1]) {
      openBox.push(Number(box1));
    }
  }

  return openBox;
}

console.log(openBoxes(5)); // [1, 4]
console.log(openBoxes(0)); // []
console.log(openBoxes(7)); // 
console.log(openBoxes(20)); // 
console.log(openBoxes(100)); // 