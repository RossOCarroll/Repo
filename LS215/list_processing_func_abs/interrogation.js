function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (!func(array[i])) {
      return false;
    }
  }
  return true;
}

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
console.log(areAllNumbers([1, 5, 6, 7, 1]));               // true
console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // false

let isAString = value => typeof value === 'string';
// console.log(myOwnEvery(['a', 'a234', 1], isAString));       // true