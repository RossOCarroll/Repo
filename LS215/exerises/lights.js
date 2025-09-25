/*
You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light 
that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the 
beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. 
On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You 
continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that 
are on after n repetitions.

Input:
  -  anumber that represents the number of lights as well as the number of rounds
Output:
  - An array that represents the lights that are on

0, 1, 2, 3, 4, 

Requirements:
  - Initialy all the lights are one
  - Loop through the light n times
  - We toggle the light if its the index plus 1 is a multiple of n
  - 

Questions:
  - Will we always receive a number greater then 0?
  - Will we always recieve a number as an argument?


Data structure"
  - Use an array of booleans to iterate over

Algorithm:
  - Create a array of false booleans
  - Create a round set to 1
  - Loop from 1 to n
    - loop through the lights array
      - If the index + 1 is a multiple of the round
        - Toggle the light 
  - Map over the lights array and convert true booleans to the index plus one
  - Filter the lights boolean for truthy values


*/


function lightsOn(switches) {
  let lights = [];
  let round = 0;

  for (let i = 0; i < switches; i++) {
    lights.push(false);
  }

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

  lights = lights.map((light, index) => {
    if (light) return index + 1;
  }).filter(light => light)

  console.log(lights);
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);  