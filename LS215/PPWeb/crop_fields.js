/*
You're given a 2D array / matrix of a crop field. Each crop needs to be hydrated. Each water source hydrates 
the 8 tiles around it. With "w" representing a water source, and "c" representing a crop, is every 
crop hydrated?

ccc
cwc c <- this crop is not watered
ccc 
 All crops are watered


WS -> 1, 1
C -> 00 , 01, 02
    11, 12
    20, 21, 22

Requirements:
 - The watered crops are all one space away in every direction
 - Using the sub arrays as rows and the index within each sub array as columns
 - Find the water sources
 - Find all the cops 
 - If any of the crops are more then 2 spaces away from a water source its not getting water
 - return true or false

Questions:
  - Will the matrix always take the form of an array and sub arrays
  - Will there be an input other then an array?
  - Will the array be sparce or contain no sub arrays?
  - will the elements in the sub array always be either c or w?

Data structure:
  - Use sub arrays to store all the rows and columns of the crops and the water sources
  - Return a boolean

Algorithm:
  - findCropWater(array , target)
  - create a location array
    - iterate through input array
      - get the index for row
        - iterate through sub array
          - if element is equal to target
          - append the [row, column ] to the location array
  - return location array

  - Iterate through all the sub arrays
    - If there is no 'w' found
      - return false
  - Create an array for crops and water sources
    - Set it to the return value of helper findCropWater
  - Iterate over the waterSourse array
    - Iterate over the crops array
      - if either the row or column of the crop is greater then 1 away from water sourse row or column 
        - return false

  - return true
  
*/

function findCropWater(array, target) {
  let location = [];

  array.forEach((rows, rowIndex) => {
    rows.forEach((ele, colIndex) => {
      if (ele === target) {
        location.push([rowIndex, colIndex]);
      }
    })
  })

  return location;
}

function cropHydrated(array) {
  if (!array.some(row => row.some(ele => ele === 'w'))) return false;

  let crops = findCropWater(array, 'c');
  let waterSources = findCropWater(array, 'w');
  let irrigatedCrops = new Set();

  waterSources.forEach(waterSource => {
    let waterRow = waterSource[0];
    let waterCol = waterSource[1];

    crops.forEach(crop => {
      let cropRow = crop[0];
      let cropCol = crop[1];

      if (Math.abs(waterRow - cropRow) <= 1 && Math.abs(waterCol - cropCol) <= 1 ) {
        irrigatedCrops.add(`${cropRow}, ${cropCol}`);
      }
    })
  })

return irrigatedCrops.size === crops.length;

}

console.log(cropHydrated([
  [ "w", "c" ],
  [ "w", "c" ],
  [ "c", "c" ]
]))
//  ➞ true

console.log(cropHydrated([
  [ "c", "c", "c" ]
]))
// ➞ false
// There isn"t even a water source.

console.log(cropHydrated([
  [ "c", "c", "c", "c" ],
  [ "w", "c", "c", "c" ],
  [ "c", "c", "c", "c" ],
  [ "c", "w", "c", "c" ]
]))
// ➞ false

console.log(cropHydrated([
  [ "c", "c", "c", "w" ],
  [ "w", "c", "c", "c" ],
  [ "c", "c", "c", "c" ],
  [ "c", "w", "c", "w" ]
])) // false