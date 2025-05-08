// function push(array, obj) {
//   array[array.length] = obj;
//   return array.length;
// }

// let arr = [1, 2, 3, 4];
// console.log(push(arr, 5));
// console.log(arr);


// function pop(arr) {
//   let ele = arr[arr.length - 1];
//   arr.length = arr.length - 1;
//   return ele
// }

// let count = [1, 2, 3];
// console.log(pop(count));             // 3
// console.log(count);                  // [ 1, 2 ]

// function unshift(arr, ele) {
//   for (let index = arr.length; index > 0; index--) {
//     arr[index] = arr[index - 1];
//   }

//   arr[0] = ele;
//   return arr.length;
// }

// let count = [1, 2, 3];
// console.log(unshift(count, 0));      // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]

let shift = function(array) {
  let first = array[0];

  if (array.length === 0) {
    return undefined;
  }

  for (let index = 0; index < array.length - 1; index += 1) {
    array[index] = array[index + 1];
  }

  array.length = array.length - 1;
  return first;
}


let count = [1, 2, 3];
shift(count);           // 1
count;                  // [ 2, 3 ]