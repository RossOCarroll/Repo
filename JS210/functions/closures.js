// let numbers = [1, 2, 3];

// function printNumbers() {
//   console.log(numbers);
// }

// printNumbers();

// numbers = [4, 5];
// printNumbers();

// function foo() {
//   let name = "Pete";
//   return function() {
//     console.log(name);
//   };
// }

// let printPete = foo();
// printPete();


// let counter = 0;

// function incrementCounter() {
//   counter += 1;
// }

// incrementCounter();
// incrementCounter();
// console.log(counter)

// function makeCounter() {
//   let counter = 0;

//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());


function add(first, second) {
  return first + second;
}

function makeAdder(firstNumber) {
  return function(secondNumber) {
    return add(firstNumber, secondNumber);
  };
}

let addFive = makeAdder(5);
let addTen = makeAdder(10);

