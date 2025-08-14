/*
You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light 
that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the 
beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On 
the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. 
You continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that 
are on after n repetitions.

Input:
  - A number (n) that represents the number of light switches

Output:
  - the number of light switches that are left on after n repetitions

Requirements:
  - All the switches are initially off
  - The first round all light switches are on
  - For every round any switch that is a multiple of n gets toggled

Data structure:
  - Use an array of booleans to represent the lights on/off states

Algorithm:
  - Create an array of falses that is n long
  - Loop n times
    - map over the array 
      - If the index + 1 is a multiple of the round
        - switch the light
  - filter the array to get the indecies that are true


*/

function getSwitches(switches) {
  let result = [];

  for (let i = 0; i < switches; i++) {
    result.push(false);
  }
  return result;
}

function lightsOn(switches) {
  let lights = getSwitches(switches);
  let round = 1
  let onLights = [];

  while (round <= switches) {
    lights = lights.map((light, index) => {
      if ((index + 1) % round === 0) {
        return !light;
      } else {
        return light;
      }
    })
    
    round++
  }

  lights.forEach((light, index) => {
    if (light) {
      onLights.push(index + 1);
    }
  })

  return onLights;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]