/*
Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.

Input:
  - 2 arrays of numbers
Output:
  - A single array with the numbers sorted

Requirements:
  - while given 2 sorted arrays merfe the arrays to one with all the numbers sorted
  - May not sort the array must build the result one element at a time in the proper order
  - either array maybe empty
  - arrays may differ in length


Questions:
  - Will there always be 2 arrays given?
  - Will the arrays always contian numbers
  - Will the arrays contian negative numbers
  - 

Data Structure
 - Arrays

Algorithm:
  - Find the largest array length
  - Create a result array 
  - concat the 2 strings together
  - create a loop while swapped is true
    - index = 0
    - create a swapped var set to false
    - If the current element is greater then the next element
      - Swap the numbers [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]]
      - swappted = true
  - return result



*/

// function merge(arr1, arr2) {
//   let numbers = arr1.concat(arr2);
//   let swapped = true;
//   let index = 0;

//   do {
//     swapped = false;

//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] > numbers[i + 1]) {
//         [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]]
//         swapped = true;
//       }      
//     }
//   } while (swapped)

//   return numbers;
// }


function merge(arr1, arr2) {
  let result = [];
  let copy1 = arr1.slice();
  let copy2 = arr2.slice();

  while(copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift())
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}


console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]