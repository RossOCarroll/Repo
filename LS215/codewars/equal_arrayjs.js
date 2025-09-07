/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most languages the index of an array starts at 0.

Input

An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output

The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note

If you are given an array with multiple answers, return the lowest correct index.


Input:
  - An array of integers
Output:
  - An integer representing the index where the numbers on the right side equal the numbers on the left

Requirements:
  - If there is no index where both side equal each other return -1
  - Empty arrays equal 0
  - An integer in the array will could be negative
  - If you are given aan array with muiltiple answers return the lowest index

Data Structure:
  - Slice the array into a left and a right side arrays

Algorithm:
  - Iterate over the input array
    - Get the left array 0 to index
      - If index is empty
        - Left will equal 0
    - Get the right side of the array
      - slice array of index to length of array
    - If the left equals right 
      - return the index

  - Return -1


*/

function sumArray(array) {
  if (!array) return 0;
  return array.reduce((acc, num) => acc + num);
}

function findEvenIndex(array) {

  for (let index = 0; index < array.length; index++) {
    let left = array.slice(0, index).length > 0 ? array.slice(0, index) : 0;
    let right = array.slice(index + 1, array.length).length > 0 ? array.slice(index + 1, array.length) : 0;
    
    if (sumArray(left) === sumArray(right)) {
      return index;
    }
  }

  return -1;
}


console.log(findEvenIndex([1,2,3,4,3,2,1]))//, 3);
console.log(findEvenIndex([1,100,50,-51,1,1]))//, 1);
console.log(findEvenIndex([1,2,3,4,5,6]))//, -1);
console.log(findEvenIndex([20,10,30,10,10,15,35]))//, 3);
console.log(findEvenIndex([20,10,-80,10,10,15,35]))//, 0);
console.log(findEvenIndex([10,-80,10,10,15,35,20]))//, 6);
console.log(findEvenIndex([8,8]))//,  -1);
console.log(findEvenIndex([8,0]))//,  0);
console.log(findEvenIndex([0,8]))//,  1);
console.log(findEvenIndex([7,3,-3]))//,  0);
console.log(findEvenIndex([8]))//,  0);
console.log(findEvenIndex([0,0,0,0,0]))//,  0);
console.log(findEvenIndex([-1,1,0,-1,1,0,-1,1,0,0]))//, 2);