/*
Write a function that accepts an array of objects and a key, then returns a new array of values corresponding 
to that key, filtering out any objects where the key doesn’t exist.


Input:
  - A array of objects
  - A key
Output:
  - A new array of values with the corresponding keys

Requirements:
  - May recieve and empty array
  - Values for any key can be any data type


Questions
  - Will we receive an empty array as a input?
  - Will there be emoty objects?
  - Will the corresponding values be any type of data?

Data structure:
  - Create an empty array to append values too

Algorithm:
  - Create an empty array
  - Iterate over the input array
    - Iterate over the objects
      - If the current key matches the input key
        - append to array

  - return array

*/


function keyValues(data, key) {
  let result = [];

  data.forEach(obj => {
    for (let currentKey in obj) {
      if (currentKey === key) {
        result.push(obj[currentKey]);
      }
    }
  })

  return result;
}


const data = [
  { name: 'Alice', age: 25 },
  { name: 'Bob' },
  { name: 'Charlie', age: 30 },
];

const key = 'age';

console.log(keyValues(data, key))
// The function should return: [25, 30]

const data2 = [
  { street: 'clark st', apt: 706 },
  { name: 'Bob' },
  { street: 'bob ave', apt: 506 },
];

const key2 = 'apt';

console.log(keyValues(data2, key2))
// The function should return: [706, 506]

console.log(keyValues([], 'find')) // []