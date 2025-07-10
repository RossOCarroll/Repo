/*
Problem Description

Write a function that returns the position of the closest active opponent. If two opponents are equidistant, 
return the opponent with the higher position on the board.

Input:
  - A object that has the name of the opponent and the key as the position of the opponent represented by a number
  - A number representing the players position on the board

Output: 
  - A Number representing the opponent that is closest to the player.

Rules:
  - We need to find the distance/difference between the player and the opponent.
  - From there we find the shortest distance
  - If an two opponents are the same distance from the player we return the opponent with the higher position
  - Return null if the object input is empty return null.

Questions:
  - Will there always be an object input as a first argument?
  - Will there always be an integer input as the second argument?
  - If not what should I do?
  - Will there be more than 2 arguments?
  - Will there be any amount of opponents?


Data Structure:
  - Id like to use an object to hold the differences in the player and opponents
  - Returning an integer or null

Algorithm:
 - Guard Clause: If object is empty return null
  - Return null if object.length === 0
 - Create a opponentDifference as an empty object
 - Iterate over the positions object 
  - Append to the opponentDiffence
   -The object.key = Math.abs(object.value - position)
 - Find the min difference in the opponentDifference object
  - return the value of the matching opponent
 - IF there are two or more matching in terms of difference return the opponent with the highest number


*/

function findClosestOpponent(positions, position) {
  if (Object.keys(positions).length === 0) { return null };

  let differences = {};

  for (let opp in positions) {
    differences[opp] = Math.abs(positions[opp] - position);
  }

  let diffArray = Object.values(differences);
  let closestOpp = Math.min(...diffArray);
  let tiedOpps = Object.keys(differences).filter(opp => differences[opp] === closestOpp);


  tiedOpps.sort((a, b) => positions[b] - positions[a]);

  return positions[tiedOpps[0]];
  

}

console.log(findClosestOpponent({
  "Opponent 1" : 1,
  "Opponent 2" : 15,
  "Opponent 3" : 37
}, 10)); // 15

console.log(findClosestOpponent({
  "Opponent 1a" : 1,
  "Opponent 1b" : 5
}, 3)); // 5

console.log(findClosestOpponent({
  "Opponent 1a" : 1, "Opponent 1b" : 5,
  "Opponent 1c" : 50, "Opponent 1d" : 100, "Opponent 1e" : null
}, 150)); // 100

console.log(findClosestOpponent({}, 74));
console.log(findClosestOpponent({
  "Atlas" : 1,
  "Luna" : 15,
  "" : 37
}, 10)); // 15

console.log(findClosestOpponent({
  "Opponent 1a" : null, "Opponent 1b" : 5, "Opponent 1c" : null,
  "Opponent 1d" : null, "Opponent 1e" : 200, "Opponent 1f" : 400
}, 300)); // 400