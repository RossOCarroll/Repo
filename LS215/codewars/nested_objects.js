/*
Create a function that takes an object and returns an object of all entries having unique marks. If the marks are the same, take who is eldest.



Input:
  - Numbered nested objects
Output:
  - A numbered object with only unique pairs

Requirements:
  - Only return a nested object of unique marks .. if two objects contian the same marks use the object that is higher in age

Questions:
  - Will we always be given an object?
  - Will the object be empty?
  - If there are no marks that are the same?


Data Structure:
  - Create a an object to store unique values

Algorithm:
  - Create an empty object
  - Iterate over the input object
    - Check if the store object has the same marks of the current object
      - If it doest append the object with the greater age
    - Else
      - Return the object


*/

function getObject(people) {
  let storedObj = {};

  for (let person in people) {
    let current = people[person];
    let marks = current.marks;

    if (!storedObj[marks] || storedObj[marks].age < current.age) {
      storedObj[marks] = current;
    }
  }

  let result = {};
  let index = 0;

  for (let key in storedObj) {
    result[index] = storedObj[key];
    index++;
  }

  return result;
}

console.log(getObject({
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 17, name: "julie", marks: "400" },
  "2": { age: 16, name: "Robin", marks: "200" },
  "3": { age: 16, name: "Bella", marks: "300" }
}))
// ➞ {
//   "0": { age: 18, name: "john", marks: "400" },
//   "1": { age: 16, name: "Robin", marks: "200" },
//   "2": { age: 16, name: "Bella", marks: "300" }
// }

console.log(getObject({
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 17, name: 'julie', marks: '400'},
  2: {age: 16, name: 'Robin', marks: '200'},
  3: {age: 16, name: 'Bella', marks: '300'},
  4: {age: 16, name: 'john', marks: '250'},
  5: {age: 15, name: 'julie', marks: '250'}
}))
// ➞    {
//   0: {age: 18, name: 'john', marks: '400'},
//   1: {age: 16, name: 'Robin', marks: '200'},
//   2: {age: 16, name: 'Bella', marks: '300'},
//   3: {age: 16, name: 'john', marks: '250'}
// }
