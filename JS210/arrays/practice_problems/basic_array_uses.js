// function firstElementOf(arr) {
//   console.log(arr[0])
// }

// firstElementOf(['U', 'S', 'A']);  // returns "U"

// function lastElementOf(arr) {
//   console.log(arr[arr.length - 1]);
// }

// lastElementOf(['U', 'S', 'A']);  // returns "A"

// function nthElementOf(arr, index) {
//   console.log(arr[index]);
// }

// let digits = [4, 8, 15, 16, 23, 42];

// nthElementOf(digits, 3);   // returns 16
// nthElementOf(digits, 8);   // what does this return?
// nthElementOf(digits, -1);  // what does this return?
// digits[-1] = -42;
// nthElementOf(digits, -1);
// digits[-1];
// digits['-1'];

// console.log(digits);// Note that we are using a string here

// function firstNOf(arr, count) {
//   let result = [];

//   for (let index = 0; index < count; index++) {
//     result.push(arr[index]);
//   }

//   console.log(result);
// }

// let digits = [4, 8, 15, 16, 23, 42];
// firstNOf(digits, 3);    // returns [4, 8, 15]


// function lastNOf(arr, count) {
//   let result = [];

//   for (let index = count; index < arr.length; index++) {
//     result.push(arr[index]);
//   }

//   console.log(result);
// }

// let digits = [4, 8, 15, 16, 23, 42];
// lastNOf(digits, 3);    // returns [16, 23, 42]

// function lastNOf(arr, count) {
//   return arr.slice(arr.length - count);
// }

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 10));    // returns [16, 23, 42]


// function endsOf(beginningArr, endingArr) {
//   return [beginningArr[0], endingArr[endingArr.length - 1]];
// }

// console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]


// function oddElementsOf(arr) {
//   let result = []

//   for (let index = 1; index < arr.length; index += 2) {
//     result.push(arr[index]);
//   }

//   console.log(result);
// }

// let digits = [4, 8, 15, 16, 23, 42];

// oddElementsOf(digits);    // returns [8, 16, 42]

// function forwardsAndRev(arr) {
//   let result = []

//   for (let index = 0; index < arr.length; index++) {
//     result.push(arr[index]);
//   }

//   for (let revIndex = (arr.length - 1); revIndex >= 0; revIndex--) {
//     result.push(arr[revIndex]);
//   }

//   console.log(result)
// }

// let digits = [4, 8, 15, 16, 23, 42];

// forwardsAndRev(digits); 

// function sortDescending(arr) {
//   let copyArray = arr.slice();
//   copyArray.sort((a, b) => { return b - a});

//   return copyArray;
  
// }

// let array = [23, 4, 16, 42, 8, 15];
// let result = sortDescending(array);
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

// function matrixSums(arr) {
//   let newArr = [];

//   arr.forEach(subArray => {
//     let sum = subArray.reduce((acc, num) => acc + num, 0);
//     newArr.push(sum)
//   });

//   console.log(newArr);
// }

// matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]

function uniqueElements(arr) {
  console.log([...new Set(arr)])
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]