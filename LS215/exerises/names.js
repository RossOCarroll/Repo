/*

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Input:
  - an array of object of name values
Output:
  - The nam e values formatted to that the list includes commas and &

Requirements:
  - If there is 3 or more names we need to add a comma between the first 2 and a & before the last name
  - Just two names just a & between each name 
  - A sing name should just return the name
  - An empty aarray should return an empty string

Data Structure:
  - create an empty string to append to
  - Create and array of name values

Algorithm:
  - Create an empty string
  - Create an array of just name values
  - Get the length of the names
  - If the length of array is 1
    - return index 0
  - If the length is 2 
    - Return index 0 + & + index 1
  - If the length is greater then 2
    - Iterate over the names
      - if the index is 0 and above but before the second to last index
       - append name + ,
      - If the index second to last index 
        - just append with space + &
      - If the las index return just the name



*/


function list(listNames) {
  let names = '';
  let namesArr = listNames.map(obj => obj['name']);
  let namesLength = namesArr.length;
  
  if (namesLength === 0) return names;
  if (namesLength === 1) return namesArr[0];
  if (namesLength === 2) return `${namesArr[0]} & ${namesArr[1]}`

  namesArr.forEach((name, index) => {
    if (index < namesLength - 2) {
      names += `${name}, `;
    } else if (index === namesLength - 2) {
      names += `${name} & `;
    } else if (index === namesLength - 1) {
      names += `${name}`;
    }
  });

  return names;
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))
// returns 'Bart, Lisa & Maggie'

console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]))
// returns 'Bart & Lisa'

console.log(list([ {name: 'Bart'} ]))
// returns 'Bart'

console.log(list([]))
// returns ''

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Marge'}, {name: 'Homer'} ]))