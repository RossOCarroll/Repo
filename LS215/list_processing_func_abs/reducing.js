function myReduce(array, func, initial) {
  let value;
  let index;

  if (initial === undefined) {
    value = array[0];
    index = 1;
  } else {
    value = initial;
    index = 0;
  }

  array.slice(index).forEach(ele => {
    value = func(value, ele)
  });

  console.log(value);
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

myReduce([5, 12, 15, 1, 6], smallest);           // 1
myReduce([5, 12, 15, 1, 6], sum, 10);            // 49

function longestWord(words) {
  return myReduce(words, longest)
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"