/*
Write a function that groups words by the number of capital letters and returns an array of object entries 
whose keys are the number of capital letters and the values are the groups.

Examples

grouping(["HaPPy", "mOOdy", "yummy", "mayBE"]) ➞ [
  [0, ["yummy"]],
  [2, ["mayBE", "mOOdy"]],
  [3, ["HaPPy"]]
]

grouping(["eeny", "meeny", "miny", "moe"]) ➞ [
  [0, ["eeny", "meeny", "miny", "moe"]]
]

grouping(["FORe", "MoR", "bOR", "tOR", "sOr", "lor"]) ➞ [
  [0, ["lor"]],
  [1, ["sOr"]],
  [2, ["bOR", "MoR", "tOR"]],
  [3, ["FORe"]]
]


Input:
  - An array of strings
Output:
  - A 2d array with the each array with the number of capitialized letters as index 0 and the word as index 1

Requirements:
  - The object entries have to be sorted by the number of cap letters
  - The groups will be arrays of words with the same amount of cap letters
  - The groups have to be sorted by alphabetically ignoring case
  - Words will be unique

Questions:
  - Will we recieve an empty array
  - Will the strings elements in the array be emoty?
  - Will we get a sparce array?

Data Structure:
  - Create an array to append groups to
  - Iterate over the array and create a 2d array

Algorithm:
  - Create a groups array
  - Iterate over the input array
    - Count the capital letters in the word
    - if the groups array has the element with the count
      - Add the word to the count
    - else  
      - Add the count, [word] to the groups array
  - Return groups
*/

function findGroup(groups, count) {
  for (let i = 0; i < groups.length; i++) {
    if (groups[i][0] === count) {
      return i;
    }
  }
}


function grouping(words) {
  let groups = [];

  words.forEach(word => {
    let count = (word.match(/[A-Z]/g) || []).length;
    let groupIndex = findGroup(groups, count)
    
    if (groupIndex !== undefined) {
      groups[groupIndex][1].push(word);
    } else {
      groups.push([count, [word]]);
    }
  })

  groups.forEach(group => {
    group[1].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  })

  return groups.sort((a, b) => a[0] - b[0]);
}



console.log(grouping(["HaPPy", "mOOdy", "yummy", "mayBE"])) 
// ➞ [
//   [0, ["yummy"]],
//   [2, ["mayBE", "mOOdy"]],
//   [3, ["HaPPy"]]
// ]

console.log(grouping(["eeny", "meeny", "miny", "moe"]))
// ➞ [
//   [0, ["eeny", "meeny", "miny", "moe"]]
// ]

console.log(grouping(["FORe", "MoR", "bOR", "tOR", "sOr", "lor"]))
// ➞ [
//   [0, ["lor"]],
//   [1, ["sOr"]],
//   [2, ["bOR", "MoR", "tOR"]],
//   [3, ["FORe"]]
// ]