// function indexOf(arr, value) {
//   for (let index = 0; index <= arr.length; index++) {
//     if (arr[index] === value) {
//       return index;
//     }
//   }

//   return -1;
// }

// console.log(indexOf([1, 2, 3, 3], 3));         // 2
// console.log(indexOf([1, 2, 3], 4));            // -1


function lastIndexOf(arr, value) {
  for (let index = arr.length; index > 0; index--) {
    if (arr[index] === value) {
      return index;
    }
  }

  return -1
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1