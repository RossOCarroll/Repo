/*
You bought a few bunches of fruit over the weekend. Create a function that splits a bunch into singular 
objects inside an array.

Examples

splitBunches([
  { name: "grapes", quantity: 2 }
]) ➞ [
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 }
]


splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]) ➞ [
  { name: "currants", quantity: 1},
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 },
  { name: "bananas", quantity: 1 },
  { name: "bananas", quantity: 1 }
]
Notes

The input array will never be empty.
Objects will always have a name and quantity over 0.
The returned object should have each fruit in the same order as the original.

Input:
  - An array of objects
Output:
  - An array of objects that are split into singular objects

Requirements:
  - From the input array we wan to take ever object that has an quantity property greater the 1 and apply
  the object singularity to the array object
  - The input will never be empty
  - Objects will always have a name and quantity will be greater then 0
  - The returned array should have the objects in the order as the input array

Questions:
  - 

Data Structure:
  - Will create an emoty array to push new objects to

Algorithm:
  - Create an empty array
  - Iterate over the input array
    - For each fruit is the quantity > 0
      - Loop from 0 to quantity
        - Add the name and quantity to the new object where quantity equals 1
    - else
      - Add object to new array

  - Return new array


*/

function splitBunches(fruits) {
  let newFruits = [];

  fruits.forEach(fruit => {
    let quantity = fruit.quantity;
    let newFruit = {}

    if (quantity > 1) {
      for (let i = 0; i < quantity; i++) {
        newFruit.name = fruit.name;
        newFruit.quantity = 1;
        newFruits.push(newFruit)
      }      
    } else {
      newFruit.name = fruit.name;
      newFruit.quantity = 1;
      newFruits.push(newFruit)
    }
  })

  return newFruits;
}


splitBunches([
  { name: "grapes", quantity: 2 }
]) 
// ➞ [
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 }
// ]


splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]) 
// ➞ [
//   { name: "currants", quantity: 1},
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 },
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 }
// ]