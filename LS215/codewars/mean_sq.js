/*
Complete the function that

accepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.

[1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
[-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

Input:
  - 2 arrays of numbers
Output:
  - The average of the absolute difference of each of the cooresponding numbers

Requirements:
  - Iterate over each array 
  - get this absolute difference
  - Push to new array
  - Get the sum of the array and dive by length
  


*/

function meanSquare(arr1, arr2) {
  let diff = [];

  for (let i = 0; i < arr1.length; i++) {
    let sqDiff = Math.abs(arr1[i] - arr2[i]);
    diff.push(sqDiff * sqDiff);
  }

  return diff.reduce((acc, num) => acc + num) / arr1.length;
}


console.log(meanSquare([1, 2, 3], [4, 5, 6]))  //          -->   9   because (9 + 9 + 9) / 3
console.log(meanSquare([10, 20, 10, 2], [10, 25, 5, -2]))//  -->  16.5 because (0 + 25 + 25 + 16) / 4
console.log(meanSquare([-1, 0], [0, -1])) //                -->   1   because (1 + 1) / 2

