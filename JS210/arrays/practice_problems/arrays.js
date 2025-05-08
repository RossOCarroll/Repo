function lastInArray(array) {
  return array[array.length - 1];
}

function rollCall(names) {
  for (let index = 0; index <= names.length; index++) {
    console.log(names[index]);
  }
}

function reversedArr(array) {
  for (let index = (array.length - 1); index >= 0; index--) {
    console.log(array[index]);
  }
}

function concated(array) {
  result = '';
  for (let index = 0; index < array.length; index++) {
    result += String(array[index]);
  }
  return result;
}

console.log(concated([1, 'a', 4]));