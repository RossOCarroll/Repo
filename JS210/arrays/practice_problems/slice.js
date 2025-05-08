function push(array, obj) {
  array[array.length] = obj;
  return array.length;
}

function unshift(arr, ele) {
  for (let index = arr.length; index > 0; index--) {
    arr[index] = arr[index - 1];
  }

  arr[0] = ele;
  return arr.length;
}

// function slice(arr, start, end) {
//   result = [];

//   for (let index = 0; index < arr.length; index++) {
//     if (index >= start && index < end) {
//       push(result, arr[index]);
//     }
//   }

//   return result;
// }


// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]


// function splice(array, begin, number) {
//   let removedValues = [];
//   for (let index = begin; index < array.length; index += 1) {
//     if (index < begin + number) {
//       push(removedValues, array[index]);
//     }

//     array[index] = array[index + number];
//   }

//   array.length = array.length - removedValues.length;
//   return removedValues;
// }


// let count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);                                 // [ 1, 2, 8 ]

// function concat(arr1, arr2) {
//   result = [];

//   arr1.forEach(element => {
//     push(result, element);
//   });

//   arr2.forEach(element => {
//     push(result, element);
//   });

//   return result;
// }

function join(array, value) {
  result = '';

  for (let index = 0; index < array.length; index++) {
    result += String(array[index]);

    if (index < array.length - 1) {
      result += value;
    }
  }

  return result;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'