/*
Given a number n, return an array containing several arrays. Each array increments in size, from range 1 to n 
inclusive, contaning its length as the elements.


pyramidArrays(1) ➞ [[1]]

pyramidArrays(3) ➞ [[1], [2, 2], [3, 3, 3]]

pyramidArrays(5) ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]

Input:
  - A number
Output:
  - A 2d array from 1 - n with each number being the size of the array and the number being the lelements

Requierments:
  - n will be a positive integer
  - Return a 2d array 

Questions:
  - Will there always be a number input?
  - 

Data structure:
  - Create an empty array of append sub arrays too

Algorithm:
  - Create an empty array
  - loop from 1 to n
    - create a subArray
    - loop while less then or equal to the current number
      - appened number to the sub array
    - append subArray to the priamid
  - Return pyramid

*/

function pyramidArrays(num) {
  let pyramid = [];

  for (let n = 1; n <= num; n++) {
    let subArray = [];

    for (let i = 1; i <= n; i++) {
      subArray.push(n);
    }
    pyramid.push(subArray);
  }

  return pyramid;
}


console.log(pyramidArrays(1)) //➞ [[1]]

console.log(pyramidArrays(3)) //➞ [[1], [2, 2], [3, 3, 3]]

console.log(pyramidArrays(5)) //➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]