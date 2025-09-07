/*
Heading off to the Tree Arboretum of Various Heights, I bring along my camera to snap up a few photos. Ideally, I'd want to take a picture of as many trees as possible, but the taller trees may cover up the shorter trees behind it.

A tree is hidden if it is shorter or the same height as the tree in front.

Given an array of tree heights, create a function which returns "left" or "right", depending on which side allows me to see as many trees as possible.

Worked Example

treePhotography([1, 3, 6, 5]) ➞ "left"
// If I stand on the left, I can see trees of heights 1, 3 and 6.
// If I stand on the right, I can see trees of heights 5 and 6.
// Return "left" because I would see more trees.


Input:
  - an array of numbers
Output:
  - A string 'left" or 'Right' depending on the greater number of trees visable

Requirements:
  - Given the array of numbers and each number represents a tree height
  - The tree is only visable if its greater then then the previous highest tree tree
  - The tree at index 0 is always visable 
  - Iterate throught the trees front and reverse
    - If the current tree is greater then the previous tree add to a new array

Questions:
  - Will we get negative numbers in the array
  - Will the array ever be empty?
  - Will the array be sparse?
  - Will we always recieve an array as an argument?
  - What if you see the same number of trees on either side

Algorithm:
  - Make a copy and revers the array rightArray
  - Current tree array
  - Iterate over left and right arrays
    - Create a previous tree
    - If the element is at index 0 
      - Add to the array
    - If the if the current tree is greater then the previous tree
      - add the tree to the array 
  - Compare the lengths of the left and right tree arrays

*/

function visibleTrees(arr) {
  let visibleTrees = [];
  let maxheight = -Infinity;

  for (let i = 0;  i < arr.length; i++) {
    let currentTree = arr[i];

    if (currentTree > maxheight) {
      visibleTrees.push(currentTree);
      maxheight = currentTree;
    } 
  }

  return visibleTrees.length;
}

function treePhotography(trees) {
  let treesCopy = trees.slice();
  let rightTrees = treesCopy.reverse();
  let visibleLeft = visibleTrees(trees);
  let visibleRight = visibleTrees(rightTrees);

  return visibleLeft > visibleRight ? 'left' : 'right';
}



console.log(treePhotography([5, 6, 5, 4])) //➞ "right"
console.log(treePhotography([10, 9, 8, 7, 8])) //➞ "right"

console.log(treePhotography([1, 2, 3, 3, 3, 3, 3])) //➞ "left"

console.log(treePhotography([3, 1, 4, 1, 5, 9, 2, 6])) //➞ "left"