//What are the characteristics that define higher-order functions?

//Higher order functions are functions that can recieve and return other functions


// let numbers = [1, 2, 3, 4];
// function checkEven(number) {
//   return number % 2 === 0;
// }

// console.log(numbers.filter(checkEven));

// filter takes the checkEven function as an argument

// let numbers = [1, 2, 3, 4];
// function makeCheckEven() {
//   return function(number) {
//     return number % 2 === 0;
//   }
// }

// let checkEven = makeCheckEven();

// console.log(numbers.filter(checkEven)); // [2, 4]

// function execute(func, operand) {
//   return func(operand);
// }

// console.log(execute(function(number) {
//   return number * 2;
// }, 10)); // 20

// console.log(execute(function(string) {
//   return string.toUpperCase();
// }, 'hey there buddy')); // "HEY THERE BUDDY"

function makeListTransformer(func) {
  return function(collection) {
    return collection.map(func);
  };
}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]