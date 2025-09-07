/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too 
early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its 
citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of 
one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single 
block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a 
function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want 
to be early or late!) and will, of course, return you to your starting point. Return false otherwise.


Input:
  - An array of letters the represent directions n s e w
Output:
  - True or false depending on weather it takes you 10 min or less and you end up in the same position as you started

Requirements:
  - each block only takes a min to traverse so each array will have to be under the length of 10
  - We start at x , y (0, 0)
    - every n increases y
    - every s decreases y
    - ever e increases x 
    - every w decreases x
    - We must end back at (0, 0)
  - We will always receive a valid array that will only contain 'n' 's' 'e' 'w'

Data structure:
  - Create an position array to adjust when iterateing over the input array

Algorithm:
  - Check if the array is greater then 10
  - Create a position array 
  - Iterate over the input array
    - If the char is 'n'
      - increase the position at index 1 by 1
    - If the char is 's' 
      - decrease y
    - If the char is 'e'
      - increase x
    - If the char is 'w'
      - decreae x
  Check if the position is equal to 0 ,0
*/

function isValidWalk(directions) {
  if (directions.length !== 10) return false;
  let position = [0, 0];

  for (let i = 0; i < directions.length; i++) {
    let direction = directions[i];

    if (direction === 'n') {
      position[1]++;
    } else if (direction === 's') {
      position[1]--;
    } else if (direction === 'e') {
      position[0]++;
    } else if (direction === 'w') {
      position[0]--;
    }
  }

  return position.every(ele => ele === 0);
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))//, 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))//, 'should return false');
console.log(isValidWalk(['w']))//, 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))//, 'should return false');
