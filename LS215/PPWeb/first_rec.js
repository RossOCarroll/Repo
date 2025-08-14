/*
Create a function that identifies the very first item that has recurred in the string argument passed. 
It returns the identified item with the index where it first appeared and the very next index where 
it resurfaced -- entirely as an object; or as an empty object if the passed argument is either null, 
undefined, empty string, or no recurring item exists.

Input:
  - A string of letters
Output:
  - An object with the letter that recurres first in the string and the indecies as the value

Rules:
  - We have to find the letter that re accures first
  - The letter whoes indecies are the lowest?
  - If there is an empty return an empty object


Data Structure:
  - 

Algorithm:
  - Create an empty object
  - Iterate over the string:
    - For each letter iterate over the string again
      - get all the indecies of that letter in the string
    - append to the object the letter and the indexies slice 0, 1
  - Sum all the indices together
  - Return the lowest paie with the lowest sum
*/

function recurIndex(string) {
  let occurrences = {};

  string.split('').forEach((letter) => {
    let indexes = [];    

    string.split('').forEach((occurrence, index) => {
      if (letter === occurrence) {
        indexes.push(index)
      }
    })
    if (indexes.length > 1) {
      occurrences[letter] = indexes.slice(0, 2);
    }
    
  })

  return Object.entries(occurrences).sort((a, b) => a[1][1] - b[1][1])[0]

  
}


console.log(recurIndex("DXTDXTXDTXD")) //➞ {"D": [0, 3]}
// D first appeared at index 0, resurfaced at index 3
// T appeared and resurfaced at indices 3 and 6 but D completed the cycle first

console.log(recurIndex("YXZXYTUVXWV")) //➞ {"X": [1, 3]}

console.log(recurIndex("YZTTZMNERXE")) //➞ {"T": [2, 3]}

console.log(recurIndex("AREDCBSDERD")) //➞ {"D": [3, 7]}

// console.log(recurIndex("")) //➞ {}

// console.log(recurIndex(null)) //➞ {}