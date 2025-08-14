/*
Implement a binarySearch function that takes an array and a search item as arguments, and returns the index 
of the search item if found, or -1 otherwise. You may assume that the array argument will always be sorted.

Input:
  - An array off elements
  - A keyword to search
Output:
  - The index of the term searched

Requirements:
  - The binary search words by repeatedly dividing the array into half
  - Take the mid point if the middle value is equal to the keyword stop the search
  - If the mid value is less/greater than then the keyword
    - Discard the lower/higher half
  - Search the other half
  - 

Algorithm:
  - Get the left equal to 0
  - Get the right half length minus 1
  - loop while left is less or equal to the right
    - Get the mid length / 2 rounded down
    - if the element at the middle is equal tot he target return the mid point
    - else if the element at the mid point is < target
      - Left = mid + 1
    - else right = mid - 1

  return -1

*/

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6