function shift(array) {
  let firstElement = array.splice(0, 1);
  return firstElement[0];
}

function unshift(array, ...args) {

  for (let j = array.length - 1; j >= 0; j--) {
    array[j + args.length] = array[j];
  }


  for (let i = 0; i < args.length; i++) {
    array[i] = args[i];
  }

  return array.length;
}



console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]