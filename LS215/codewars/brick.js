/*
Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and returns true if 
this brick can fit into a hole with the width(w) and height(h).

Examples

doesBrickFit(1, 1, 1, 1, 1) ➞ true

doesBrickFit(1, 2, 1, 1, 1) ➞ true

doesBrickFit(1, 2, 2, 1, 1) ➞ false

Input:
  - 5 numbers that represent the w h d of a brick and a w h of a hole
Output:
  - True or false depending on if the brick can fit in the hole.

Requirements:
  - The brick can move with any side into the hole
  - The Brick fits if its sizes equal or less then the hole not strickly less
  - You cannot put the brick in diagonally
  - We need to try every combination (h , w) <= (h, w), (h, d) <= (h, w), (w, d) <= (w, h)

Questions:
  - Will we always recieve 5 arguments and will they be integers that are positive?

Data Structure:
  - Create an array with different combinations of ways the brick could fit

Algorithm:
  - Create an array of different combinations of the h w d of the brick
  - Iterate over the array
    - Check each pair of combinations with the h w of the hole
    - Sort the combinations so that we are matching smallest and largest
      - Return true if any combitation is less then or equal to the h , w
  



*/


function doesBrickFit(a, b, c, h, w) {
  let combinations = [[a, b], [a, c], [b, c]];
  let hole = [h, w].slice().sort();

  for (let i = 0; i < combinations.length; i++) {
    let combo = combinations[i].slice().sort();
    if (combo[0] <= hole[0] && combo[1] <= hole[1]) {
      return true
    }
  }

  return false;
}

console.log(doesBrickFit(1, 1, 1, 1, 1))// ➞ true

console.log(doesBrickFit(1, 2, 1, 1, 1))// ➞ true

console.log(doesBrickFit(1, 2, 2, 1, 1))// ➞ false