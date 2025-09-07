/*

A ship has to transport cargo from one place to another, while picking up cargo along the way. Given the total amount of cargo and the types of cargo holds in the ship as arrays, create a function that returns true if each weight of cargo can fit in one hold, and false if it can't.

"S" means 50 cargo space.
"M" means 100 cargo space.
"L" means 200 cargo space.
Examples

willFit(["M", "L", "L", "M"], [56, 62, 84, 90]) ➞ true

willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70 , 80, 90, 200]) ➞ false

willFit(["L", "L", "M"], [56, 62, 84, 90]) ➞ true


Input:
  - An array of letters
  - An Array of numbers

Output:
  - True or false depending on weather the numbers can fit into the ship

Requirements:
  - Tbe letter array represents the capacity of the ship
  - If the total of the cargo is greater then the capacity then the output should be false

Questions:
  - Will either array be empty?
  - Will we always receive two arrays?

Data Structure:
  - Create ab obj to convert and get the capacity of the ship
  - Get the sum of the cargo holds and the sum of the cargo
  - If the capacity is less then the cargo then return true
  - Otherwise return false


*/

function willFit(capacity, cargo) {
  const HOLDS = {S: 50, M: 100, L: 200};
  let willFit = capacity.map((hold, index) => {
    return HOLDS[hold] >= cargo[index];
  });

  return !willFit.some(hold => !hold);
}



console.log(willFit(["M", "L", "L", "M"], [56, 62, 84, 90]))// ➞ true

console.log(willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70 , 80, 90, 200]))// ➞ false

console.log(willFit(["L", "L", "M"], [56, 62, 84, 90]))// ➞ true
