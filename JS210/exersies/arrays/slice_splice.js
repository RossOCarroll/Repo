// function slice(array, begin, end) {
//   begin > array.length ? begin = array.length : begin = begin;
//   end > array.length ? end = array.length : end = end;

//   let newArray = []

//   for (let index = begin; index < end; index++ ) {
//     newArray.push(array[index]);
//   }

//   return newArray;
// }

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]


function splice(array, start, deleteCount, ...args) {
  start = Math.min(start, array.length); // Clamp start to array length

  let newArray = [];

  // Collect elements to remove
  for (let index = 0; index < deleteCount; index++) {
    if (start + index < array.length) {
      newArray.push(array[start + index]);
    }
  }

  if (args.length > 0) {
    // Handle insertion case
    const tail = array.slice(start + deleteCount); // store what's after the deleted part
    array.length = start; // truncate array
    array.push(...args); // insert new elements
    array.push(...tail); // add tail back
  } else {
    // No args: just remove items and shift left
    for (let i = start + deleteCount; i < array.length; i++) {
      array[start++] = array[i];
    }
    array.length -= deleteCount;
  }

  return newArray;
}


console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]