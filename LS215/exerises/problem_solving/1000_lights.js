/*
You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light 
that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the 
beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On 
the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You 
continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that 
are on after n repetitions.

Input:
  - Number of Switches, that is also the number of repetitions

Output:
  - An array of light that are turned on after toggling the approprate switches 'n' number of times

Rules:
  - All the lights are turned off
  - For the nth round the switches that are multiples of 'n' get triggered
  - The number of witches dictates the number of rounds
  - Return an array with the switches that were toggled or on

Questions: 
  - Will the input always be an integer?
  - Will the there always be just one argument?
  - Will the input number be a negative number?


Data Structure:
  - Use an array to represent the lights.. booleans to represent state
  - An Object to represent the light and the number?

Algorithm:
  - Create an object that is the size of the input number with the keys as the light numbers and values of false
  - Create a round variable at 1
  - Loop through rounds while the round is less then 'n'
    - iterate over the object
      - if the the current key is a multiple of the round
        - flip the switch or change the key to true
    - increment the rounds
  - Iterate over the object switches and return the keys with true as their value

*/

function createSwitches(n) {
  let object = {};

  for (let i = 1; i < n + 1; i++) {
    object[i] = false;
  }

  return object;
}

function findOnSwitches(switches) {
  let array = [];

  for ( let light in switches)  {
    if (switches[light]) {
      array.push(Number(light));
    }
  }
  return array;
}

function lightsOn(n) {
  let switches = createSwitches(n);
  let round = 1;

  while (round <= n ) {
    for( let light in switches) {
      if (light % round === 0) {
        switches[light] = !switches[light];
      }
    }
    round++
  }

  let onSwitches = findOnSwitches(switches);
  return onSwitches;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
